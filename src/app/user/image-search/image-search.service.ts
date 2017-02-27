import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageSearchService {
  clientId :string = "fd4479c13de20182f7fa";
  clientSecret :string = "5a167815b5ad244e58020507894f9f4583843e7c";
  bingSearchKey : string = "64f386f00052481abd13c69a9da820e9";
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
  getImages(searchText:string) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let params = new URLSearchParams();
    params.set('q',searchText);
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

