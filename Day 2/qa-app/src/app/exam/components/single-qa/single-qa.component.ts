import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QA, QuestionStatus } from 'src/app/models/qa.model';
import { UserAnswerArgs } from 'src/app/models/wrappers/user-answer-args.model';

@Component({
    selector: 'app-single-qa',
    templateUrl: './single-qa.component.html',
    styleUrls: ['./single-qa.component.scss']
})
export class SingleQaComponent implements OnInit {

    @Input() question: QA;
    @Output() userAnswer = new EventEmitter<UserAnswerArgs>();
    constructor() { }

    ngOnInit() {
    }

    getQuestionStatus(): QuestionStatus {
        if (!this.question.userAnswer) {
            return "NotAnswered";
        }
        return this.question.userAnswer === this.question.correctAnswer ? "Correct" : "Incorrect";
    }
    onAnswerClick(answer: string) {
        this.userAnswer.emit({ question: this.question, userAnswer: answer });
    }

}
