import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Images } from './images';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageSearchService {
  images: any;
  constructor(private http: Http) { }
  private extractImages(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('This request has failed ' + res.status);
    } else {
      let data = res.json();
      return data;
    }
  }
  getImages(): Observable<any> {
    if (!this.images) {
      return this.http.get('http://httpbin.org/get')
        .map(this.extractImages)
        .catch(this.handleError);
    } else {
      //return cached data
      return this.createObservable(this.images);
    }
  }
  private createObservable(data: any): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      observer.next(data);
      observer.complete();
    });
  } 
  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  } 
}
