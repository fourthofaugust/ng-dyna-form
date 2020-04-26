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
    },
    {
      "questionId": 94,
      "questionTypeId": 1,
      "questionDescription": "Rank  salt  intake",
      "responseOptions": [
        {
          "responseId": 5,
          "responseDescription": "High",
          "isTextRequired": null
        },
        {
          "responseId": 6,
          "responseDescription": "Medium",
          "isTextRequired": null
        },
        {
          "responseId": 7,
          "responseDescription": "Low",
          "isTextRequired": null
        }
      ],
      "followUpQuestionIds": null
    },
  ]

  submit(values: any): void {
    console.log('Form submitted!');
    console.log(values);
  }

}
