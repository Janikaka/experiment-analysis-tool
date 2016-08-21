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
var ExperimentMetadataComponent = (function () {
    function ExperimentMetadataComponent(experimentServerService, router, route) {
        this.experimentServerService = experimentServerService;
        this.router = router;
        this.route = route;
        this.deleted = false;
    }
    ExperimentMetadataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.experimentServerService.getExperiment(id)
                .then(function (experiment) { _this.experiment = experiment; _this.data = 'http://127.0.0.1:6543/experiments/' + _this.experiment.id + '/data'; });
        });
    };
    ExperimentMetadataComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ExperimentMetadataComponent.prototype.goBack = function () {
        window.history.back();
    };
    ExperimentMetadataComponent = __decorate([
        core_1.Component({
            selector: 'experiment-metadata',
            templateUrl: 'app/experiment-metadata.component.html',
        }), 
        __metadata('design:paramtypes', [experiment_server_service_1.ExperimentServerService, router_1.Router, router_1.ActivatedRoute])
    ], ExperimentMetadataComponent);
    return ExperimentMetadataComponent;
}());
exports.ExperimentMetadataComponent = ExperimentMetadataComponent;
//# sourceMappingURL=experiment-metadata.component.js.map