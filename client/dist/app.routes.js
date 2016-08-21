"use strict";
var router_1 = require('@angular/router');
var experiments_component_1 = require('./experiments.component');
var experiment_detail_component_1 = require('./experiment-detail.component');
exports.routes = [
    {
        path: '',
        redirectTo: '/experiments',
        pathMatch: 'full'
    },
    {
        path: 'experiments',
        component: experiments_component_1.ExperimentsComponent
    },
    {
        path: 'experiments/:id',
        component: experiment_detail_component_1.ExperimentDetailComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routes.js.map