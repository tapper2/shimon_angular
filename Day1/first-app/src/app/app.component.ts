import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  keyword: string;
  isBusy = false;
  result: Array<string> = [];
  selectedItem: string = null;
  setSelectedItem(item: string) {
    this.selectedItem = item;
  }

  setKeyword(s: string) {
    console.log("S : ", s)
    this.keyword = s;
  }

  search() {
    this.isBusy = true;
    this.result = [];
    setTimeout(() => {
      for (let index = 0; index < 5; index++) {
        this.result.push(this.keyword + index);
      }
      this.isBusy = false;
    }, 2000);
  }
}
