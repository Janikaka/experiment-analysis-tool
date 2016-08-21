import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Experiment } from './experiment';
import { ExperimentServerService } from './experiment-server.service';

@Component({
  selector: 'experiment-metadata',
  templateUrl: 'app/experiment-metadata.component.html',
})

export class ExperimentMetadataComponent implements OnInit, OnDestroy {
  experiment: Experiment;
  deleted = false; 
  sub: any;
  data: string;

  constructor(
    private experimentServerService: ExperimentServerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.experimentServerService.getExperiment(id)
        .then(experiment => {this.experiment = experiment; this.data = 'http://127.0.0.1:6543/experiments/' + this.experiment.id + '/data'});
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }

}