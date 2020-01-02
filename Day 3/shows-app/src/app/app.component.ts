import { Component, OnInit } from '@angular/core';
import { ShowsService } from './shows/services/shows.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'show-app';

    constructor(private showService: ShowsService) {
    }

    ngOnInit() {

    }
}
