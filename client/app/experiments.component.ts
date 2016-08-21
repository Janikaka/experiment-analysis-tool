import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Experiment } from './experiment';
import { ExperimentServerService } from './experiment-server.service';


@Component({
  selector: 'experiments',
  templateUrl: 'app/experiments.component.html',
})
export class ExperimentsComponent implements OnInit {
  experiments: Experiment[];

  constructor(
    private router: Router,
    private experimentServerService: ExperimentServerService) { }

  getExperiments() {
    this.experimentServerService.getExperiments().then(experiments => this.experiments = experiments);
  }

  ngOnInit() {
    this.getExperiments();
  }

  showMetadata(id) {
    this.router.navigate(['/experiments', id]);
  }

}