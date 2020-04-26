import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IQuestion, IQuestionnaire} from "../models/questionnaire.interface";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  form: FormGroup;

  @Input() questions: IQuestion[];

  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  get controls() {
    return this.questions
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
  }

  /**
   * Submits the form.
   *
   * @returns {void}
   */
  submit(): void {
    this.onSubmit.emit(this.value);
  }

  /**
   * Creates a new form.
   *
   * @private
   * @returns {void}
   */
  private createForm(): void {
    this.form = this.createGroup();
  }

  /**
   * Creates a new form group.
   *
   * @private
   * @returns {FormGroup}
   */
  private createGroup(): FormGroup {
    const group = this.formBuilder.group({});
    this.controls.forEach((control) =>
      group.addControl(String(control.questionId), this.createControl(control)));
    return group;
  }

  /**
   * Creates a new form control.
   *
   * @private
   * @returns {FormControl}
   */
  private createControl(config: IQuestion): FormControl {
    return this.formBuilder.control({value: ''}, [Validators.required])
  }

}
