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
var experiment_server_service_1 = require('./experiment-server.service');
var router_1 = require('@angular/router');
var ExperimentDataComponent = (function () {
    function ExperimentDataComponent(experimentServerService, router, route) {
        this.experimentServerService = experimentServerService;
        this.router = router;
        this.route = route;
    }
    ExperimentDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.router.navigate(['/experiments/' + id + '/data']);
        });
    };
    ExperimentDataComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ExperimentDataComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/experiment-data.component.html'
        }), 
        __metadata('design:paramtypes', [experiment_server_service_1.ExperimentServerService, router_1.Router, router_1.ActivatedRoute])
    ], ExperimentDataComponent);
    return ExperimentDataComponent;
}());
exports.ExperimentDataComponent = ExperimentDataComponent;
//# sourceMappingURL=experiment-data.component.js.map