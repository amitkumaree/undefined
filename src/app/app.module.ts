import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { TopicComponent } from './topic/topic.component';
import { SubTopicComponent } from './sub-topic/sub-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    SyllabusComponent,
    TopicComponent,
    SubTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
