import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { ShowsRootComponent } from './components/shows-root/shows-root.component';
import { EditAddShowComponent } from './components/edit-add-show/edit-add-show.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
    declarations: [ShowsListComponent, ShowsRootComponent, EditAddShowComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [ShowsRootComponent]
})
export class ShowsModule { }
