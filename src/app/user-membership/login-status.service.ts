import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class LoginStatusService {
    private subject = new Subject<any>();
 
    changed() {
        this.subject.next();
    }
  
    onChange(): Observable<any> {
        return this.subject.asObservable();
    }
}