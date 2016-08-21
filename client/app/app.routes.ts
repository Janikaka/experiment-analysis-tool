import { provideRouter, RouterConfig }  from '@angular/router';

import { ExperimentsComponent } from './experiments.component';
import { ExperimentDetailComponent } from './experiment-detail.component';
import { ExperimentDataComponent } from './experiment-data.component';


export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/experiments',
    pathMatch: 'full'
  },
  {
    path: 'experiments',
    component: ExperimentsComponent
  },
  {
    path: 'experiments/:id',
    component: ExperimentDetailComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/