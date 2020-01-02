import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'USE-pipes';
    appCount2Visible = false;

    changeAppCount2Visible(){
        this.appCount2Visible = !this.appCount2Visible;
    }
}
