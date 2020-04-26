import {Component, OnInit} from '@angular/core';
import {IFormField, IQuestion} from "../../models/questionnaire.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dyna-input',
  templateUrl: './dyna-input.component.html',
  styleUrls: ['./dyna-input.component.css']
})
export class DynaInputComponent implements IFormField {
  group: FormGroup;
  question: IQuestion;
}
