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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var core_1 = require('@angular/core');
var ExperimentServerService = (function () {
    function ExperimentServerService(http) {
        this.http = http;
    }
    ExperimentServerService.prototype.getExperiments = function () {
        return this.http
            .get("http://127.0.0.1:6543/experiments")
            .toPromise()
            .then(this.extractData);
    };
    ExperimentServerService.prototype.getExperiment = function (id) {
        return this.http
            .get("http://127.0.0.1:6543/experiments/" + id + "/metadata")
            .toPromise()
            .then(this.extractData);
    };
    ExperimentServerService.prototype.getExperimentData = function (id) {
        return this.http
            .get("http://127.0.0.1:6543/experiments/" + id + "/data")
            .toPromise()
            .then(this.extractData);
    };
    ExperimentServerService.prototype.getExperimentgroup = function (expid, expgroupid) {
        var url = 'http://127.0.0.1:6543/experiments/' + expid + '/experimentgroups/' + expgroupid;
        return this.http.get(url)
            .toPromise()
            .then(this.extractData);
    };
    ExperimentServerService.prototype.getResultByNestedLevel = function (level) {
        var url = 'http://127.0.0.1:8081/';
        var headers = new http_1.Headers();
        headers.append('nestedLevel', level);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(url, options)
            .toPromise()
            .then(this.extractData);
    };
    ExperimentServerService.prototype.postResultToServer = function (result) {
        var body = JSON.stringify(result);
        var options = new http_1.RequestOptions({ body: body });
        var url = 'http://127.0.0.1:8081/';
        this.http.post(url, options)
            .toPromise()
            .then(this.extractData);
    };
    ExperimentServerService.prototype.createFile = function (filename, result) {
        var json = { "filename": filename, "result": result };
        var body = JSON.stringify(json);
        var options = new http_1.RequestOptions({ body: body });
        var url = 'http://127.0.0.1:8081/file';
        this.http.post(url, options)
            .toPromise()
            .then(this.extractData);
    };
    ExperimentServerService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ExperimentServerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ExperimentServerService);
    return ExperimentServerService;
}());
exports.ExperimentServerService = ExperimentServerService;
//# sourceMappingURL=experiment-server.service.js.map