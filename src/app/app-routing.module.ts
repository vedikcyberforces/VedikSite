import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { JoinComponent } from './components/join/join.component';
import { JoinrequestsComponent } from './components/joinrelated/joinrequests/joinrequests.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"about", component: AboutComponent},
  {path:"join", component:JoinComponent},
  {path:"admin/joinrequests", component:JoinrequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
