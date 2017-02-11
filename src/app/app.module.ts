import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { LtFeedsComponent } from './feeds/lt-feeds/lt-feeds.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserPostFormComponent } from './user/user-post-form/user-post-form.component';
import { ImageSearchComponent } from './user/image-search/image-search.component';
import { ImageSearchService } from './user/image-search/image-search.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    UserPostFormComponent,
    ImageSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ImageSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
