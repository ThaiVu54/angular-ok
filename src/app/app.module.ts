import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StarComponent } from './components/star/star.component';
const routes: Routes = [
  { path: 'list', component: ListComponent },
  {path: 'productDetail', component: ProductDetailComponent, children:[
    { path: ':id', component: ProductDetailComponent }
  ]},
  // { path: 'productDetail/:id', component: ProductDetailComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProductDetailComponent,
    StarComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
