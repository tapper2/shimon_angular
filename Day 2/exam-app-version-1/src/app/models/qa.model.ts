export interface QA {
    questionText: string;
    options: string[];
    correctAnswer: string;
    userAnswer: string;
    // timeLimit:number;
}

export type QuestionStatus = 'Correct' | 'Incorrect' | 'NotAnswered';


