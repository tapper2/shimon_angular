import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QA, QuestionStatus } from 'src/app/models/qa.model';
import { UserAnswerArgs } from 'src/app/models/wrappers/user-answer-args.model';
import { ExamService } from '../../services/exam.service';

@Component({
    selector: 'app-single-qa',
    templateUrl: './single-qa.component.html',
    styleUrls: ['./single-qa.component.scss']
})
export class SingleQaComponent implements OnInit {

    @Input() question: QA;
    @Output() userAnswer = new EventEmitter<UserAnswerArgs>();
    
    constructor(private examService: ExamService) { }

    ngOnInit() {
    }

    getQuestionStatus(): QuestionStatus {
        return this.examService.getQuestionStatus(this.question);
    }
    onAnswerClick(answer: string) {
        this.userAnswer.emit({ question: this.question, userAnswer: answer });
    }

}
