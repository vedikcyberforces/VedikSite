import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ArtComponent } from './components/art/art.component';
import { HomeComponent } from './components/home/home.component';
import { JoinComponent } from './components/join/join.component';
import { JoinrequestsComponent } from './components/joinrelated/joinrequests/joinrequests.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/login/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"about", component: AboutComponent},
  {path:"join", component:JoinComponent},
  {path:"admin/joinrequests", component:JoinrequestsComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"profile", component:ProfileComponent},
  {path:"art", component:ArtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
