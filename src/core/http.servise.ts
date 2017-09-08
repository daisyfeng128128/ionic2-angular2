
/**
 * Created by pwc on 2017/8/25.
 */
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
// import { APP_SERVISE_URL } from './../config/system.config';

import 'rxjs/add/operator/map';


@Injectable()
export class HTTP {
  constructor(
    private http: Http
  ) {

  }

  /**
   * 发送get请求
   * @param url
   * @param options
   * @returns {Promise<Object>}
   */
  public async get(url: string, options?: RequestOptionsArgs): Promise<any> {
    // url = APP_SERVISE_URL + "" + url; //本地
    console.log(url);
    return new Promise((resolve,reject)=>{
      this.http.get(url, options)
        .map(res=>res.json())
        .subscribe(
          obj=>{
            resolve(obj);
          },
          err=>{
            console.log(err);
            reject(err);
          });
    });
  }

  /**
   * 发送post请求
   * @param url
   * @param body
   * @param options
   * @returns {Promise<Object>}
   */
  public async post(url: string, body: Object, options?: RequestOptionsArgs): Promise<any> {
    // url = APP_SERVISE_URL + "" + url;
    console.log(url);
    let params = new URLSearchParams();
    for (let i in body) {
      params.set(i, body[i]);
    }

    return new Promise((resolve,reject)=>{
      this.http.post(url, params, options)
        .map(res=>res.json())
        .subscribe(
          obj=>{
            resolve(obj);
          },
          err=>{
            reject(err);
          });
    });
  }
}


