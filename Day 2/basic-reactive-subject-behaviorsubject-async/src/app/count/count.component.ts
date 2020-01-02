import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountService } from '../services/count.service';
import { Subscription, Observable } from 'rxjs';

@Component({
    selector: 'app-count',
    templateUrl: './count.component.html',
    styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

    count$: Observable<number>;
    constructor(private countService: CountService) { }

    ngOnInit() {
        this.count$ = this.countService.countChanged;
    }

    plus() {
        this.countService.plus();
    }
    minus() {
        this.countService.minus();

    }

}
