import {FormGroup} from '@angular/forms'

export interface IQuestionnaire {
  sectionId: number,
  sectionName: string,
  questions: Array<IQuestion>
}

export interface IQuestion {
  questionId: number
  questionTypeId: number
  questionDescription: string
  responseOptions: Array<IResponseOptions>,
}

export interface IResponseOptions {
  responseId: number,
  responseDescription: string,
  isTextRequired: boolean
}

export interface IFormField {
  group: FormGroup;
  question: IQuestion;
}
