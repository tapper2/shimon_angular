import { Component, OnInit } from '@angular/core';
import { ExamService } from './exam/services/exam.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'exam-app';

    constructor(private examService: ExamService) {

    }

    ngOnInit() {
        this.examService.initExamQuestions();
    }
}
