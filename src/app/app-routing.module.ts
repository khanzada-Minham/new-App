import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './Component/search/search.component';
import { ProductsComponent } from './Component/products/products.component';

const routes: Routes = [
  { path: '', component:ProductsComponent },
  {path:'Search',component:SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
