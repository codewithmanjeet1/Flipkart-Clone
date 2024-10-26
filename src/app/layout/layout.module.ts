import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";
import { HomeComponent } from './home/home.component';
import { CotegoryModule } from "./cotegory/cotegory.module";


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FooterModule,
    HeaderModule,
    CotegoryModule
]
})
export class LayoutModule { }
