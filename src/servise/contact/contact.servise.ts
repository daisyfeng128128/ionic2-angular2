// import { UserInfo } from './login.interface';
import { HttpServise } from './../../core/http.servise';
import { Injectable } from '@angular/core';


@Injectable()

export class ContactServise {
    // url:string = '/base/';
    constructor(
        private http: HttpServise,
    ) {

    }
    /**
     * 通讯录不需参数
     * @param parmas 
     * 
     * 
     */
    public async contact(): Promise<any> {
        let response = this.http.post('/base/userFriend/getUserFriend',{});
        if (response) {
            return response;
        } else {
            return null;
        }
    }
}