import { HttpServise } from './../../core/http.servise';
import { Injectable } from '@angular/core';


@Injectable()

export class RegisterServise {
    // url:string = '/base/';
    constructor(
        private http: HttpServise,
    ) {

    }
    /**
     * 用户注册
     * @param parmas 
     * parmas: phoneNum 用户名
     *         password 密码
     */
    public async register(parmas: any): Promise<any> {
        let response: any = this.http.post('/base/user/register', parmas);
        if (response) { 
            return response;
        } else {
            return null;
        }
    }
}