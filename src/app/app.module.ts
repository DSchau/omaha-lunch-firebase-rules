import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { PostModule } from './post/post.module';
import { PostsModule } from './posts/posts.module';
import { SubmitModule } from './submit/submit.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';

import { firebase } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebase, 'omaha-lunch'),
    AngularFireDatabaseModule,
    AppRoutingModule,   
    PostModule,
    PostsModule,
    SubmitModule,
    UserModule
  ],
  providers: [
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
