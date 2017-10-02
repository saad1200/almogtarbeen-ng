import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { UserCredential } from './user.credential.model'


@Injectable()
export class AuthenticationService{
    constructor (private http: Http) {

    }

    login(userCredential : UserCredential) : Observable<Response> {
        return this.http
                   .post(`/api/authenticate`, JSON.stringify(userCredential))
                   .map((res:Response) => {
                        let user = res.json();
                        if(user && user.token) {
                            localStorage.setItem('currentUser', JSON.stringify(user));
                        }
                        return user;
                   });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
 }