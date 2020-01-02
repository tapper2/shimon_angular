import { Component, OnInit } from '@angular/core';
import { QA, QuestionStatus } from 'src/app/models/qa.model';
import { UserAnswerArgs } from 'src/app/models/wrappers/user-answer-args.model';
import { ExamService } from '../../services/exam.service';

@Component({
    selector: 'app-main-exam',
    templateUrl: './main-exam.component.html',
    styleUrls: ['./main-exam.component.scss']
})
export class MainExamComponent implements OnInit {

    allQuestions: QA[] = [];
    selectedQuestion: QA;
    constructor(private examService: ExamService) {

    }

    ngOnInit() {
        this.initQuestions();
    }

    onSelectQuestionRequested(qa: QA) {
        this.selectedQuestion = qa;
    }

    onUserAnswer(args: UserAnswerArgs) {
        args.question.userAnswer = args.userAnswer;
    }

    getQuestionStatus(qa: QA): QuestionStatus {
        return this.examService.getQuestionStatus(qa);
    }
    getCurrentGrade() {
        const correctLen = this.allQuestions.filter(x => this.getQuestionStatus(x) === 'Correct').length;
        return correctLen;
    }

    initQuestions() {
        this.allQuestions = this.examService.getExamQuestions();
    }


}
