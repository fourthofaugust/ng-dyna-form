import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { DynaInputComponent } from './questionnaire/dyna-input/dyna-input.component';
import { DynaRadioComponent } from './questionnaire/dyna-radio/dyna-radio.component';
import { DynaDirectiveDirective } from './questionnaire/dyna-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    DynaInputComponent,
    DynaRadioComponent,
    DynaDirectiveDirective
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
