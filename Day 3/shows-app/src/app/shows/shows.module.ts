import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { ShowsRootComponent } from './components/shows-root/shows-root.component';



@NgModule({
  declarations: [ShowsListComponent, ShowsRootComponent],
  imports: [
    CommonModule
  ],
  exports:[ShowsRootComponent]
})
export class ShowsModule { }
