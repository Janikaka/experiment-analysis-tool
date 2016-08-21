import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ExperimentServerService } from './experiment-server.service';
import { ExperimentsComponent } from './experiments.component';
import { ExperimentMetadataComponent } from './experiment-metadata.component';
import { ExperimentDataComponent } from './experiment-data.component';
import { ExperimentDetailComponent } from './experiment-detail.component';
 
@Component({
  selector: 'app',
  template: `
  
  <h1>Experiment analysis tool</h1>
  <nav>
  	
  </nav><br><br>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
  	ExperimentServerService
  ],
  precompile: [
    ExperimentsComponent, 
    ExperimentMetadataComponent,
    ExperimentDataComponent,
    ExperimentDetailComponent]
})
export class AppComponent { 
}