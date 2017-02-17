import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Images } from './images';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class ImageSearchService {
  clientId :string = "fd4479c13de20182f7fa";
  clientSecret :string = "5a167815b5ad244e58020507894f9f4583843e7c";
  bingSearchKey : string = "64f386f00052481abd13c69a9da820e9";
  images: any;
  constructor(private http: Http) { }
  createAuthorizationHeader(headers: Headers) {
    headers.append('Ocp-Apim-Subscription-Key',this.bingSearchKey);
  }
  private extractImages(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('This request has failed ' + res.status);
    } else {
      let data = res.json();
      return data;
    }
  }
  getImages() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let params = new URLSearchParams();
    params.set('q','facebook');
    return this.http.get('https://api.cognitive.microsoft.com/bing/v5.0/images/search?',{
      headers: headers,
      search: params
    })
    .map(this.extractImages)
    .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  } 
}

