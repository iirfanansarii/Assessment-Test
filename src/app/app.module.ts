import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreaterComponent } from './pages/creater/creater.component';
import { AddQuestionComponent } from './pages/add-question/add-question.component';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, CreaterComponent, AddQuestionComponent],
  imports: [BrowserModule, AppRoutingModule, CountdownModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
