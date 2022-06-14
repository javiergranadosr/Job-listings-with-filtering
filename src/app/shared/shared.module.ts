import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { CardFilterComponent } from './card-filter/card-filter.component';

@NgModule({
  declarations: [
    HeaderBannerComponent,
    CardFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderBannerComponent
  ],
})
export class SharedModule { }
