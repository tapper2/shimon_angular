import { Component, OnInit, Input } from '@angular/core';
import { ShowResponse } from 'src/app/models/show.model';

@Component({
    selector: 'app-shows-list',
    templateUrl: './shows-list.component.html',
    styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit {

    @Input() shows: ShowResponse[] = [];
    filtredList: ShowResponse[] = [];

    constructor() { }

    ngOnInit() {
        this.filtredList = this.shows;
    }

    onSeachChanged(str: string) {
        this.filtredList = this.shows.filter(x => x.show.name.toLowerCase().includes(str.toLowerCase()));
    }

}
