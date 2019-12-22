import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-string-list',
  templateUrl: './string-list.component.html',
  styleUrls: ['./string-list.component.scss']
})
export class StringListComponent implements OnInit {

  @Input() title = '';
  @Input() list: Array<string> = [];
  constructor() { }

  ngOnInit() {
  }

}
