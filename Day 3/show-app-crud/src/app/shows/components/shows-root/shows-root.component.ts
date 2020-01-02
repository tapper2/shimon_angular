import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../services/shows.service';
import { Show } from 'src/app/models/show.model';

@Component({
    selector: 'app-shows-root',
    templateUrl: './shows-root.component.html',
    styleUrls: ['./shows-root.component.scss']
})
export class ShowsRootComponent implements OnInit {
    showList: Show[];
    selectedShow: Show;

    constructor(private showService: ShowsService) { }

    ngOnInit() {
        this.refreshList();
    }

    async onEditingFinished(show: Show, isNew: boolean) {
        if (!isNew) {
            await this.showService.updateShow(show);
        } else {
            await this.showService.addShow(show);
        }
        this.selectedShow = null;
        this.refreshList();

    }
    onSelectShowRequired(show: Show) {
        this.selectedShow = show;
    }
    async onDeleteShowRequired(show: Show) {

        try {
            await this.showService.deleteShow(show);
            this.refreshList();
        } catch (e) {
            alert('Failed to delete show ' + show.name);
        }




    }

    refreshList() {
        this.showService.getAllShows()
            .subscribe(result => {
                this.showList = result;
            }, errr => {
                alert('BASA');
                console.error(errr);
            });
    }

}
