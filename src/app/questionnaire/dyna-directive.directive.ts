import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, Type, ViewContainerRef} from '@angular/core';
import {DynaInputComponent} from "./dyna-input/dyna-input.component";
import {DynaRadioComponent} from "./dyna-radio/dyna-radio.component";
import {IFormField, IQuestion} from "../models/questionnaire.interface";
import {FormGroup} from "@angular/forms";


const components: { [type: number]: Type<IFormField> } = {
  1: DynaRadioComponent,
  5: DynaInputComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynaDirectiveDirective implements IFormField, OnInit {

  private component: ComponentRef<IFormField>;

  @Input() question: IQuestion;
  @Input() group: FormGroup;

  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {
  }

  ngOnInit(): void {
    this.checkType();
    this.createComponent();
  }

  /**
   * Checks if the given input type is supported.
   *
   * @private
   * @returns {void}
   */
  private checkType(): void {
    if (!components[this.question.questionTypeId]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `You are trying to use an unsupported type (${this.question.questionTypeId}).
        Supported types: ${supportedTypes}`
      );
    }
  }

  /**
   * Creates a dynamically field component.
   *
   * @private
   * @returns {void}
   */
  private createComponent(): void {
    const component = this.resolver.resolveComponentFactory<IFormField>(components[this.question.questionTypeId]);

    this.component = this.container.createComponent(component);
    this.component.instance.question = this.question;
    this.component.instance.group = this.group;
  }

}
