import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainExamComponent } from './components/main-exam/main-exam.component';
import { SingleQaComponent } from './components/single-qa/single-qa.component';
import { QaListComponent } from './components/qa-list/qa-list.component';



@NgModule({
    declarations: [MainExamComponent, SingleQaComponent, QaListComponent],
    exports: [MainExamComponent],
    imports: [
        CommonModule
    ]
})
export class ExamModule { }
