import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';



@NgModule({
  declarations: [
    NewsComponent
  ],
  exports: [
    NewsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewsModule { }
