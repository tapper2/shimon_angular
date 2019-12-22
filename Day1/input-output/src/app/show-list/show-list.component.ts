import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  @Input() shows: Show[] = [];
  @Input() selectedShow: Show = null;

  @Output() showSelected = new EventEmitter<Show>();


  setSelectedShow(s: Show) {
//    this.selectedShow = s;
                    // raise event
    this.showSelected.emit(s);
  }

  constructor() {

  }

  ngOnInit() {
  }

}
