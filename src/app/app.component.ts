import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions = [
    {
      "questionId": 3,
      "questionTypeId": 5,
      "questionDescription": "Are you Phani?",
      "responseOptions": [],
    },
    {
      "questionId": 4,
      "questionTypeId": 5,
      "questionDescription": "Are you on a physician prescribed medical diet?",
      "responseOptions": [],
    },
    {
      "questionId": 93,
      "questionTypeId": 5,
      "questionDescription": "#  of  meals  you  eat  in  an  average  day",
      "responseOptions": [],
      "followUpQuestionIds": null
    }
  ]

  submit(values: any): void {
    console.log('Form submitted!');
    console.log(values);
  }

}
