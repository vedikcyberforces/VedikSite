import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributorComponent } from './components/contributor/contributor.component';
import { HomeComponent } from './components/home/home.component';
import { MemberComponent } from './components/member/member.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    NavbarComponent,
    HomeComponent,
    ContributorComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
