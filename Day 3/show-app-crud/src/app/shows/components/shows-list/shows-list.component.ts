import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Show } from 'src/app/models/show.model';

@Component({
    selector: 'app-shows-list',
    templateUrl: './shows-list.component.html',
    styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit, OnChanges {

    @Input() shows: Show[] = [];
    @Input() selectedShow: Show;
    @Output() selectShowRequired = new EventEmitter<Show>();
    @Output() deleteShowRequired = new EventEmitter<Show>();


    filtredList: Show[] = [];

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges() {
        this.filtredList = this.shows;
    }
    onDeleteClick(e: MouseEvent, show: Show) {
        this.deleteShowRequired.emit(show);
        // native js
        e.stopPropagation();
        // e.preventDefault();
        console.log(e);
    }
    onClick(show: Show) {
        this.selectShowRequired.emit(show);
    }

    onSeachChanged(str: string) {
        this.filtredList = this.shows.filter(x => x.name.toLowerCase().includes(str.toLowerCase()));
    }

}
