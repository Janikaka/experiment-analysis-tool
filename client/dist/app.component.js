"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var experiment_server_service_1 = require('./experiment-server.service');
var experiments_component_1 = require('./experiments.component');
var experiment_metadata_component_1 = require('./experiment-metadata.component');
var experiment_data_component_1 = require('./experiment-data.component');
var experiment_detail_component_1 = require('./experiment-detail.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n  \n  <h1>Experiment analysis tool</h1>\n  <nav>\n  \t\n  </nav><br><br>\n  <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                experiment_server_service_1.ExperimentServerService
            ],
            precompile: [
                experiments_component_1.ExperimentsComponent,
                experiment_metadata_component_1.ExperimentMetadataComponent,
                experiment_data_component_1.ExperimentDataComponent,
                experiment_detail_component_1.ExperimentDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map