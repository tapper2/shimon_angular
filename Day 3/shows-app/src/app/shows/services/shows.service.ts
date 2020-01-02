import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShowResponse } from 'src/app/models/show.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShowsService {

    constructor(private httpClient: HttpClient) { }


    getAllShows(): Observable<ShowResponse[]> {
        console.log('getAllShows');
        return this.httpClient.get<ShowResponse[]>('http://api.tvmaze.com/search/shows?q=Lu');

    }

}
