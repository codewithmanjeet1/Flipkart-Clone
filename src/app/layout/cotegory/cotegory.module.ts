import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotegoryRoutingModule } from './cotegory-routing.module';
import { CotegoryComponent } from './cotegory/cotegory.component';


@NgModule({
  declarations: [
    CotegoryComponent
  ],
  imports: [
    CommonModule,
    CotegoryRoutingModule
  ],
  exports:[CotegoryComponent]
})
export class CotegoryModule { }
