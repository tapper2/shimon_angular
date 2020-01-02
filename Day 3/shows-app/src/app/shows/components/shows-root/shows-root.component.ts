import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../services/shows.service';
import { ShowResponse } from 'src/app/models/show.model';

@Component({
    selector: 'app-shows-root',
    templateUrl: './shows-root.component.html',
    styleUrls: ['./shows-root.component.scss']
})
export class ShowsRootComponent implements OnInit {
    showList: ShowResponse[];

    constructor(private showService: ShowsService) { }

    ngOnInit() {
        this.showService.getAllShows()
            .subscribe(result => {
                this.showList = result;
            }, errr => {
                alert('BASA');
                console.error(errr);
            });
    }

}
