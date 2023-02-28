import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostComponent } from './homepage/post/post.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './users-list/user/user.component';
import { UserProfileComponent } from './users-list/user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PostComponent,
    UsersListComponent,
    SidebarComponent,
    UserComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
