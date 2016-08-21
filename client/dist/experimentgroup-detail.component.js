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
var ExperimentgroupDetailComponent = (function () {
    function ExperimentgroupDetailComponent(experimentServerService, router, route) {
        this.experimentServerService = experimentServerService;
        this.router = router;
        this.route = route;
    }
    ExperimentgroupDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var expid = +params['expid'];
            _this.experimentId = expid;
            var expgroupid = +params['expgroupid'];
            _this.experimentServerService.getExperimentgroup(expid, expgroupid)
                .then(function (experimentgroup) { return _this.experimentgroup = experimentgroup; });
        });
    };
    ExperimentgroupDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    ExperimentgroupDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ExperimentgroupDetailComponent = __decorate([
        core_1.Component({
            selector: 'Experimentgroup-detail',
            templateUrl: 'app/experimentgroup-detail.component.html'
        }), 
        __metadata('design:paramtypes', [experiment_server_service_1.ExperimentServerService, router_1.Router, router_1.ActivatedRoute])
    ], ExperimentgroupDetailComponent);
    return ExperimentgroupDetailComponent;
}());
exports.ExperimentgroupDetailComponent = ExperimentgroupDetailComponent;
//# sourceMappingURL=experimentgroup-detail.component.js.map