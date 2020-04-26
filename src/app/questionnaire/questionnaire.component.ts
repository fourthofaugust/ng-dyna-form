import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IQuestion, IQuestionnaire} from "../models/questionnaire.interface";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit, OnChanges {

  form: FormGroup;

  @Input() questionnaire: IQuestionnaire;

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  get controls() {
    return this.questionnaire.questions
  }

  get valid() {
    return this.form.valid;
  }

  get value() {
    return this.form.value;
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  submit(): void {
    this.onSubmit.emit(this.value);
  }

  private createForm(): void {
    this.form = this.createGroup();
  }

  private createGroup(): FormGroup {
    const group = this.formBuilder.group({});
    this.controls.forEach((control) =>
      group.addControl(String(control.questionId), this.createControl(control)));
    return group;
  }

  private createControl(config: IQuestion): FormControl {
    return this.formBuilder.control('', [Validators.required])
  }

  ngOnChanges(changes: SimpleChanges): void {
    // This will re-initiate the form on section change
    // @ts-ignore
    if (changes.questionnaire) {
      this.createForm()
    }
  }

}
