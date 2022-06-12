import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    CardComponent,
    DetailComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CardComponent]
})
export class JobsModule { }
