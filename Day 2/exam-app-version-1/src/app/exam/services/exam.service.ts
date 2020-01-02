import { QA, QuestionStatus } from 'src/app/models/qa.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ExamService {
    getQuestionStatus(qa: QA): QuestionStatus {
        if (!qa.userAnswer) {
            return "NotAnswered";
        }
        return qa.userAnswer === qa.correctAnswer ? "Correct" : "Incorrect";
    }

    getExamQuestions(): QA[] {
        const allQuestions = [];
        allQuestions.push({
            correctAnswer: '2',
            options: ['1', '7', '2', '55'],
            questionText: '1 + 1',
            userAnswer: null
        });

        allQuestions.push({
            correctAnswer: '20',
            options: ['10', '20', '2', '55'],
            questionText: '16 + 4',
            userAnswer: null
        });

        allQuestions.push({
            correctAnswer: '1',
            options: ['1', '88', '2', '55'],
            questionText: '0 + 1',
            userAnswer: null
        });

        allQuestions.push({
            correctAnswer: '101',
            options: ['1', '101', '2', '55'],
            questionText: '90 + 11',
            userAnswer: null
        });

        allQuestions.push({
            correctAnswer: '900',
            options: ['1', '7', '2', '900'],
            questionText: '1000 - 100',
            userAnswer: null
        });

        allQuestions.push({
            correctAnswer: '91',
            options: ['1', '7', '91', '55'],
            questionText: '1 + 90',
            userAnswer: null
        });

        return allQuestions;

    }
}

// export class ExamServiceTest {
//     getQuestionStatus(qa: QA): QuestionStatus {
//         return "NotAnswered";
//     }
// }

// var s: ExamService = new ExamServiceTest();
