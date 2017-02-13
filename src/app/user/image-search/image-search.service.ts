import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
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
  getImages() {
    return this.http.get('http://httpbin.org/get')
      .map(this.extractImages)
      .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  } 
}

