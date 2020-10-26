import { Component, OnInit } from '@angular/core';
import { Assessment } from 'src/app/models/assessment.model';
import { Question } from 'src/app/models/questions.model';
import { Option } from 'src/app/models/option.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
})
export class AddQuestionComponent implements OnInit {
  assessment = new Assessment();
  questionArray = [];
  optionArray = [];
  question = new Question();

  constructor() {}

  ngOnInit() {
    this.addQuestion();
  }
  addQuestion() {
    let question = new Question();
    this.addOption(question);
    this.questionArray.push(question);
  }

  addOption(question: Question) {
    let optionArray = [];
    if (typeof question.options !== 'undefined') {
      optionArray = question.options;
      // console.log('option added');
      optionArray.push(new Option());
    } else {
      // console.log('option created and added');
      optionArray = [];
      optionArray.push(new Option());
    }
    // console.log('nothing done...');
    question.options = optionArray;
  }

  removeOption(index) {
    this.optionArray.splice(index);
  }

  removeQuestion(index) {
    this.questionArray.splice(index);
  }
  onSubmit(){
    console.log(this.questionArray);
   
  }
}