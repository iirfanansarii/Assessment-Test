import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './pages/add-question/add-question.component';
import { CreaterComponent } from './pages/creater/creater.component';

const routes: Routes = [
  {path: '',component:CreaterComponent },
  {path: 'addQuestion' , component:AddQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
