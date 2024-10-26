import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  
  { path: "ProductDetails", loadChildren: () => import("./product-details/product-details.module").then(m => m.ProductDetailsModule) },
  { path: "ProductListing", loadChildren: () => import("./product-listing/product-listing.module").then(m => m.ProductListingModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
