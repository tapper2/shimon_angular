import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamModule } from './exam/exam.module';
import { ExamService, ExamServiceTest } from './exam/services/exam.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ExamModule
    ],
    //when ask               use:
    // providers: [{ provide: ExamService, useClass: ExamService }],
    //same as:
    // providers: [ExamService],
    bootstrap: [AppComponent]
})
export class AppModule { }
