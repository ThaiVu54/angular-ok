import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StarComponent } from './components/star/star.component';
import { AdminRoutes } from './routes/admin.routing';
import { CountdownComponent } from './countdown/countdown.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ProductAddComponent } from './product-add/product-add.component';
const routes: Routes = [
  { path: 'list', component: ListComponent },
  {path: 'productDetail', component: ProductDetailComponent, children:[
    { path: ':id', component: ProductDetailComponent }
  ]},
  { path: 'countdown', component: CountdownComponent},
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'login', component: LoginComponent },
  { path: 'productAdd-reactive', component: ProductAddComponent },
  { path: '**', component: NotFoundComponent },
  // { path: 'productDetail/:id', component: ProductDetailComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProductDetailComponent,
    LoginComponent,
    StarComponent,
    CountdownComponent,
    ReactiveComponent,
    ProductAddComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AdminRoutes, RouterModule.forRoot(routes)],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
