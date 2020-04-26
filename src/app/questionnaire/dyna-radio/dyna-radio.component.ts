import {Component, OnInit} from '@angular/core';
import {IFormField, IQuestion} from "../../models/questionnaire.interface";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dyna-radio',
  templateUrl: './dyna-radio.component.html',
  styleUrls: ['./dyna-radio.component.css']
})
export class DynaRadioComponent implements IFormField {
  group: FormGroup;
  question: IQuestion;
}
