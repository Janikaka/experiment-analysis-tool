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
var ExperimentDetailComponent = (function () {
    function ExperimentDetailComponent(experimentServerService, router, route) {
        this.experimentServerService = experimentServerService;
        this.router = router;
        this.route = route;
        this.nestedLevels = [1, 2, 3, 4, 5];
        this.currNestedLevel = 1;
    }
    ExperimentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.experimentServerService.getExperimentData(id)
                .then(function (results) {
                _this.result = results;
                _this.currentResult = _this.result;
                _this.experimentServerService.postResultToServer(_this.result);
            });
        });
    };
    ExperimentDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ExperimentDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    ExperimentDetailComponent.prototype.selectLevel = function () {
        this.currNestedLevel = document.getElementById("nestedLevelSelect")["value"];
        this.changeLevel(this.currNestedLevel);
    };
    ExperimentDetailComponent.prototype.changeLevel = function (level) {
        var _this = this;
        if (level == 1) {
            this.experimentServerService.getResultByNestedLevel(level)
                .then(function (result) { return _this.currentResult = result; });
        }
        else if (level == 2) {
            this.experimentServerService.getResultByNestedLevel(level)
                .then(function (result) { return _this.currentResult = result; });
        }
        else if (level == 3) {
            this.experimentServerService.getResultByNestedLevel(level)
                .then(function (result) { return _this.currentResult = result; });
        }
        else if (level == 4) {
            this.experimentServerService.getResultByNestedLevel(level)
                .then(function (result) { return _this.currentResult = result; });
        }
        else if (level == 5) {
            this.currentResult = this.result;
        }
    };
    ExperimentDetailComponent.prototype.create = function () {
        var filename = document.getElementById("filename")["value"];
        this.experimentServerService.createFile(filename, this.currentResult, this.currNestedLevel)
            .then(function (res) {
            var status = res.status;
            //showing results?
            window.history.back();
        });
    };
    ExperimentDetailComponent = __decorate([
        core_1.Component({
            selector: 'experiment-detail',
            templateUrl: 'app/experiment-detail.component.html',
        }), 
        __metadata('design:paramtypes', [experiment_server_service_1.ExperimentServerService, router_1.Router, router_1.ActivatedRoute])
    ], ExperimentDetailComponent);
    return ExperimentDetailComponent;
}());
exports.ExperimentDetailComponent = ExperimentDetailComponent;
//# sourceMappingURL=experiment-detail.component.js.map