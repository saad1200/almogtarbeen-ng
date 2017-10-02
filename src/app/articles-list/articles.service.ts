import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Article } from './article.model'

@Injectable()
export class ArticlesService{
    constructor (private http: Http) {

    }

    get(userId : number) : Observable<Article[]> {
        return this.http
                   .get(`/api/articles/`+ userId)
                   .map((res:Response) => res.json());
    }
 }