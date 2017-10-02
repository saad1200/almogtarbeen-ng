import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { UserRegisteration } from './user-registeration.model'


@Injectable()
export class UserRegisterationService{
    constructor (private http: Http) {

    }

    register(userRegisteration: UserRegisteration) : Observable<Response> {
        return this.http
        .post(`/api/users`, JSON.stringify(userRegisteration))
        .map((res:Response) => res.json());
    }
}