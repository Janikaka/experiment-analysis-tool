import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Experiment } from './experiment';
import { Result } from './result';
import { ExperimentServerService } from './experiment-server.service';
import { ExperimentMetadataComponent } from './experiment-metadata.component';

@Component({
  selector: 'experiment-detail',
  templateUrl: 'app/experiment-detail.component.html',
  
})
export class ExperimentDetailComponent implements OnInit, OnDestroy {
  nestedLevels = [1, 2, 3, 4, 5];
  currNestedLevel = 1;
  sub: any;
  result: Result;
  currentResult: any;

  constructor(
    private experimentServerService: ExperimentServerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.experimentServerService.getExperimentData(id)
        .then(results => {
          this.result = results;
          this.currentResult = this.result;
          this.experimentServerService.postResultToServer(this.result)
        })
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }

  selectLevel() {
    this.currNestedLevel = document.getElementById("nestedLevelSelect")["value"];
    this.changeLevel(this.currNestedLevel);
  }

  changeLevel(level:number) {
    if(level == 1) {
      this.experimentServerService.getResultByNestedLevel(level)
        .then(result => this.currentResult = result);
    } else if(level == 2) {
      this.experimentServerService.getResultByNestedLevel(level)
        .then(result => this.currentResult = result);
    } else if(level == 3) {
      this.experimentServerService.getResultByNestedLevel(level)
        .then(result => this.currentResult = result);
    } else if(level == 4) {
      this.experimentServerService.getResultByNestedLevel(level)
        .then(result => this.currentResult = result);
    } else if(level == 5) {
      this.currentResult = this.result;
    }

  }

  create() {
    let filename = document.getElementById("filename")["value"];
    this.experimentServerService.createFile(filename, this.currentResult);
  }

}