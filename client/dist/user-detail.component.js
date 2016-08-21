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
var router_2 = require('@angular/router');
var experiment_server_service_1 = require('./experiment-server.service');
var UserDetailComponent = (function () {
    function UserDetailComponent(router, experimentServerService, route) {
        this.router = router;
        this.experimentServerService = experimentServerService;
        this.route = route;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.experimentServerService.getUser(id)
                .then(function (user) {
                _this.user = user;
                _this.experimentServerService.getConfigurationsForUser(user.username)
                    .then(function (configurations) { return _this.configurations = configurations; });
            });
            _this.experimentServerService.getExperimentsForUser(id)
                .then(function (experiments) { return _this.experiments = experiments; });
        });
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    UserDetailComponent.prototype.onSelect = function (experiment) {
        this.selectedExperiment = experiment;
        this.router.navigate(['/experiments/' + this.selectedExperiment.id]);
    };
    UserDetailComponent.prototype.deleteUser = function () {
        this.deleted = this.experimentServerService.deleteUser(this.user.id);
    };
    UserDetailComponent.prototype.showExpgroup = function (id) {
        this.router.navigate(['/experimentgroups/', id]);
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'user-detail',
            templateUrl: 'app/user-detail.component.html',
        }), 
        __metadata('design:paramtypes', [router_2.Router, experiment_server_service_1.ExperimentServerService, router_1.ActivatedRoute])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map