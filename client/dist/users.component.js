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
var UsersComponent = (function () {
    //selectedUser: User;
    function UsersComponent(router, experimentServerService) {
        this.router = router;
        this.experimentServerService = experimentServerService;
    }
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.experimentServerService.getUsers().then(function (users) { return _this.users = users; });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.onSelect = function (user) {
        //this.selectedUser = user; 
        this.router.navigate(['/users/', user.id]);
    };
    /*
      showUserDetails() {
        this.router.navigate(['/users/', this.selectedUser.id]);
      }
    */
    UsersComponent.prototype.deleteUser = function (id) {
        this.experimentServerService.deleteUser(id);
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            templateUrl: 'app/users.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, experiment_server_service_1.ExperimentServerService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map