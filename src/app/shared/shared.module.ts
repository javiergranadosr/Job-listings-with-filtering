import { NgModule } from '@angular/core';
import { HeaderBannerComponent } from './header-banner/header-banner.component';
import { CardFilterComponent } from './card-filter/card-filter.component';



@NgModule({
  declarations: [
    HeaderBannerComponent,
    CardFilterComponent
  ],
  exports: [
    HeaderBannerComponent
  ],
})
export class SharedModule { }
