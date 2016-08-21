import { Experiment } from './experiment';
import { Experimentgroup } from './experimentgroup';
import { User } from './user';
import { Result } from './result';


import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Injectable } from '@angular/core';



@Injectable()
export class ExperimentServerService {

  constructor(private http:Http) {}

  getExperiments(): Promise<Experiment[]> {
    return this.http
        .get("http://127.0.0.1:6543/experiments")
        .toPromise()
        .then(this.extractData);
  }

  getExperiment(id: number): Promise<Experiment> {
    return this.http
        .get("http://127.0.0.1:6543/experiments/" + id + "/metadata")
        .toPromise()
        .then(this.extractData);
  }

  getExperimentData(id: number) {
    return this.http
        .get("http://127.0.0.1:6543/experiments/" + id + "/data")
        .toPromise()
        .then(this.extractData);
  }

  getExperimentgroup(expid: number, expgroupid: number): Promise<Experimentgroup> {
    let url = 'http://127.0.0.1:6543/experiments/' + expid + '/experimentgroups/' + expgroupid;
    return this.http.get(url)
             .toPromise()
             .then(this.extractData)
  }

  getResultByNestedLevel(level: number): Promise<Result> {
    let url = 'http://127.0.0.1:8081/';
    let headers = new Headers();
    headers.append('nestedLevel', level);
    let options = new RequestOptions({headers: headers});
    return this.http.get(url, options)
        .toPromise()
        .then(this.extractData);
  }

  postResultToServer(result: Result) {
    let body = JSON.stringify(result);
    let options = new RequestOptions({body: body});
    let url = 'http://127.0.0.1:8081/';
    this.http.post(url, options)
        .toPromise()
        .then(this.extractData);
  }

  createFile(filename: String, result: Result) {
    let json = {"filename": filename, "result": result};
    let body = JSON.stringify(json);
    let options = new RequestOptions({body: body});
    let url = 'http://127.0.0.1:8081/file';
    this.http.post(url, options)
        .toPromise()
        .then(this.extractData);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }



}