import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotegoryComponent } from './cotegory/cotegory.component';

const routes: Routes = [
  {path:"", component:CotegoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotegoryRoutingModule { }
