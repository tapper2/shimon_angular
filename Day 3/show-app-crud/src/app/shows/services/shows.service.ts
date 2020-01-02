import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from 'src/app/models/show.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShowsService {

    constructor(private httpClient: HttpClient) { }

    updateShow(show: Show) {
        return this.httpClient.put<Show>('http://localhost:3000/shows/' + show.id, show).toPromise();
    }

    addShow(show: Show) {
        return this.httpClient.post<Show>('http://localhost:3000/shows/', show).toPromise();
    }


    deleteShow(show: Show) {
        return this.httpClient.delete<void>('http://localhost:3000/shows/' + show.id).toPromise();
    }
    getAllShows(): Observable<Show[]> {
        return this.httpClient.get<Show[]>('http://localhost:3000/shows');

    }

}
