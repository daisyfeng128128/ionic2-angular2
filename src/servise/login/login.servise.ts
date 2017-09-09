import { HttpServise } from './../../core/http.servise';
import { Injectable } from '@angular/core';

@Injectable()

export class LoginServise {
    // url:string = '/base/';
    constructor(
        private http: HttpServise,
    ) {

    }
    /**
     * 用户登录
     * @param parmas 
     * parmas: phoneNum 用户名
     *         password 密码
     */
    public async login(parmas: any): Promise<any> {
        let response = this.http.post('/base/user/login', parmas);
        if (response) {
            return response;
        } else {
            return null;
        }
    }

    /**
     * 用户登出
     * @param parmas 
     */
    public async logOut(): Promise<any> {
        let response: any = this.http.get('/base/user/logout',{});
        if (response) {
            return response;
        } else {
            return null;
        }
    }
}