import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QA, QuestionStatus } from 'src/app/models/qa.model';
import { ExamService } from '../../services/exam.service';

@Component({
    selector: 'app-qa-list',
    templateUrl: './qa-list.component.html',
    styleUrls: ['./qa-list.component.scss']
})
export class QaListComponent implements OnInit {


    @Input() questions: QA[] = [];
    @Input() selectedQuestion: QA;
    @Output() selectQuestionRequested = new EventEmitter<QA>();

    constructor(private examService: ExamService) {

    }


    onQuestionClick(qa: QA) {
        this.selectQuestionRequested.emit(qa);
    }

    getQuestionStatus(qa: QA): QuestionStatus {
        return this.examService.getQuestionStatus(qa);
    }

    ngOnInit() {
    }

}
