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
var UsersForExperimentComponent = (function () {
    function UsersForExperimentComponent(route, experimentServerService) {
        this.route = route;
        this.experimentServerService = experimentServerService;
    }
    UsersForExperimentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.experimentServerService.getExperiment(id)
                .then(function (experiment) { return _this.experiment = experiment; });
            _this.experimentServerService.getUsersForExperiment(id)
                .then(function (users) { return _this.users = users; });
        });
    };
    UsersForExperimentComponent.prototype.showDeleteText = function (bool, id) {
        document.getElementById("deleteText_" + id).hidden = !bool;
    };
    UsersForExperimentComponent.prototype.deleteUserFromExp = function (userId) {
        this.experimentServerService.deleteUserFromExperiment(userId, this.experiment.id);
    };
    UsersForExperimentComponent.prototype.goBack = function () {
        window.history.back();
    };
    UsersForExperimentComponent = __decorate([
        core_1.Component({
            selector: 'users-for-experiment',
            templateUrl: 'app/users-for-experiment.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, experiment_server_service_1.ExperimentServerService])
    ], UsersForExperimentComponent);
    return UsersForExperimentComponent;
}());
exports.UsersForExperimentComponent = UsersForExperimentComponent;
//# sourceMappingURL=users-for-experiment.component.js.map