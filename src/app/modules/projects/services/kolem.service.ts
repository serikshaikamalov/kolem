import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ProjectsService {

    constructor(
        private http: HttpClient
    ) { }


    /**
     * @return Category[]
     */
    public getProjects(): Observable<any> {        
        return this.http.get<any>(environment.apiUrl + '/projects');
    }

    public getSingleProject( _id ): Observable<any> {        
        return this.http.get<any>(environment.apiUrl + '/projects/' + _id);
    }
}