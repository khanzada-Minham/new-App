import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Component/products/products.component';
import { SearchComponent } from './Component/search/search.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './Share/navbar/navbar.component';
import { HeaderlineComponent } from './Share/headerline/headerline.component';
import { ProductsListComponent } from './Component/products/products-list/products-list.component';
import { FilterProductComponent } from './Component/products/filter-product/filter-product.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SearchComponent,
    NavbarComponent,
    HeaderlineComponent,
    ProductsListComponent,
    FilterProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
