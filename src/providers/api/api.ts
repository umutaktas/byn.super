import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {BiyoneService} from "./biyone.service";

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'https://example.com/api/v1';

  constructor(public http: HttpClient, private authService: AuthService, private biyoneService: BiyoneService) {
  }


  facebookLogin() {
    return this.authService.facebookLogin()
  }

  signOut() {
    return this.authService.signOut()

  }

  hasLoggedIn() {
    return this.authService.hasLoggedIn()
  }

  getAllDiscounts() {
    return this.biyoneService.getAllDiscounts()
  }

 getFirmImage(uid) {
   // return this.biyoneService.getFirm(uid)
 }








  /*
    *
    * Bellow code is contain HTTP Restfull Methods
    *
    * */

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}
