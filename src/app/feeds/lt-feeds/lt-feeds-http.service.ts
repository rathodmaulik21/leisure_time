import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class LtFeedsHttpService {
  userFeeds:any = {};
  constructor(private http: Http) {}
  public getFeeds() {
    let headers = new Headers();
    headers.set('Content-Type','application/x-www-form-urlencoded');
    return this.http.get('http://localhost:3000/feeds')
    .map(this.extractData)
    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  } 
}
