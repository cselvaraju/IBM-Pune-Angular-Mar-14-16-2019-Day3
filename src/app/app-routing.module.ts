import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { PostdemoComponent } from './components/postdemo/postdemo.component';
import { Friendly404Component } from './components/friendly404/friendly404.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pipes', component: PipedemoComponent},
  {path: 'posts', component: PostdemoComponent},
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: '**', component: Friendly404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
