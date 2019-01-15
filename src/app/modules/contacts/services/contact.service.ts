import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ContactService {

    constructor(
        private http: HttpClient
    ) { }


    /**
     * Send Email
     */
    public sendEmail( formData ): Observable<any> {        
        return this.http.post<any>(environment.apiUrl + '/mail', formData);
    }    
}