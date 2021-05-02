import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributorComponent } from './components/contributor/contributor.component';
import { MemberComponent } from './components/member/member.component';

const routes: Routes = [
  {
    path:"member", component: MemberComponent
  },
  {
    path:"contributor", component: ContributorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
