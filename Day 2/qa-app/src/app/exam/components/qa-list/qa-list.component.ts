import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QA, QuestionStatus } from 'src/app/models/qa.model';

@Component({
    selector: 'app-qa-list',
    templateUrl: './qa-list.component.html',
    styleUrls: ['./qa-list.component.scss']
})
export class QaListComponent implements OnInit {


    @Input() questions: QA[] = [];
    @Input() selectedQuestion: QA;
    @Output() selectQuestionRequested = new EventEmitter<QA>();

    constructor() {

    }


    onQuestionClick(qa: QA) {
        this.selectQuestionRequested.emit(qa);
    }

    getQuestionStatus(qa: QA): QuestionStatus {
        if (!qa.userAnswer) {
            return "NotAnswered";
        }
        return qa.userAnswer === qa.correctAnswer ? "Correct" : "Incorrect";
    }

    ngOnInit() {
    }

}
