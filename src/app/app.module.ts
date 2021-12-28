import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StarComponent } from './components/star/star.component';
import { AdminRoutes } from './routes/admin.routing';
import { CountdownComponent } from './countdown/countdown.component';
const routes: Routes = [
  { path: 'list', component: ListComponent },
  {path: 'productDetail', component: ProductDetailComponent, children:[
    { path: ':id', component: ProductDetailComponent }
  ]},
  { path: 'countdown', component: CountdownComponent},
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: '**', component: NotFoundComponent },
  // { path: 'productDetail/:id', component: ProductDetailComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProductDetailComponent,
    StarComponent,
    CountdownComponent,
  ],
  imports: [BrowserModule, FormsModule, AdminRoutes, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
