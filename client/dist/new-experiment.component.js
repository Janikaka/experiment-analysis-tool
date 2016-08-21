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
var experiment_1 = require('./experiment');
var experiment_server_service_1 = require('./experiment-server.service');
var NewExperimentComponent = (function () {
    function NewExperimentComponent(experimentServerService) {
        this.experimentServerService = experimentServerService;
        this.valueTypes = ['Integer', 'Double', 'Boolean', 'String'];
        this.model = new experiment_1.Experiment(null, '', [], null, null, null, null, null);
        this.submitted = false;
        this.experimentgroups = [];
        this.active = true;
    }
    NewExperimentComponent.prototype.addExperimentgroup = function () {
        this.experimentgroups.push({ 'id': this.experimentgroups.length + 1, 'name': '', 'configurations': [] });
    };
    NewExperimentComponent.prototype.addConf = function (id) {
        this.experimentgroups[id - 1]['configurations'].push({ 'id': this.experimentgroups[id - 1]['configurations'].length + 1, 'key': '', 'value': null });
    };
    NewExperimentComponent.prototype.setConfValueType = function (expgroupId, confId, type) {
        console.log("setConfValueType: " + type);
        this.experimentgroups[expgroupId - 1]['configurations'][confId - 1]['type'] = type;
    };
    NewExperimentComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.model.experimentgroups = [];
        for (var j = 1; j <= this.experimentgroups.length; j++) {
            var name_1 = document.getElementById("" + j)['value'];
            var experimentgroup = { 'id': null, 'name': name_1, 'configurations': [], 'totalDataitems': 0 };
            for (var i = 1; i <= this.experimentgroups[j - 1]['configurations'].length; i++) {
                var key = document.getElementById(j + '_' + i + '_key')['value'];
                var value = document.getElementById(j + '_' + i + '_value')['value'];
                var type = document.getElementById(j + '_' + i + '_select')['value'];
                console.log("key: " + key + ", value: " + value + ", type: " + type);
                if (type == 'Integer') {
                    value = parseInt(value);
                }
                else if (type == 'Double') {
                    value = parseFloat(value); //Problem: 5.0 === 5
                }
                else if (type == 'Boolean') {
                    value = Boolean(value);
                }
                console.log("typeof value: " + typeof (value));
                var conf = { 'id': null, 'key': key, 'value': value };
                experimentgroup['configurations'].push(conf);
            }
            this.model.experimentgroups.push(experimentgroup);
        }
        this.experimentServerService.createExperiment(this.model);
    };
    NewExperimentComponent = __decorate([
        core_1.Component({
            selector: 'new-experiment',
            templateUrl: 'app/new-experiment.component.html'
        }), 
        __metadata('design:paramtypes', [experiment_server_service_1.ExperimentServerService])
    ], NewExperimentComponent);
    return NewExperimentComponent;
}());
exports.NewExperimentComponent = NewExperimentComponent;
//# sourceMappingURL=new-experiment.component.js.map