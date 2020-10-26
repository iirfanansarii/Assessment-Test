import { Question } from './questions.model';
import {Option} from './option.model'

export class Assessment {
  _id: String;
  questions: Question[];
  options: Option[];
}