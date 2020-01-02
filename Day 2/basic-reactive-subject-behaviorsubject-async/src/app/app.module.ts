import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuffixPipe } from './suffix.pipe';
import { CountComponent } from './count/count.component';
import { CountService } from './services/count.service';

@NgModule({
    declarations: [
        AppComponent,
        SuffixPipe,
        CountComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [{ provide: CountService, useClass: CountService }],
    bootstrap: [AppComponent]
})
export class AppModule { }
