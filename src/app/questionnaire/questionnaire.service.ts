import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  data = [
    {
      "sectionId": 2,
      "sectionName": "Diet",
      "questions": [
        {
          "questionId": 3,
          "questionTypeId": 1,
          "questionDescription": "Are you dieting?",
          "responseOptions": [],
        },
        {
          "questionId": 4,
          "questionTypeId": 1,
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
        /*{
          "questionId": 94,
          "questionTypeId": 3,
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
        {
          "questionId": 95,
          "questionTypeId": 3,
          "questionDescription": "Rank  fat  intake",
          "responseOptions": [
            {
              "responseId": 8,
              "responseDescription": "High",
              "isTextRequired": null
            },
            {
              "responseId": 9,
              "responseDescription": "Medium",
              "isTextRequired": null
            },
            {
              "responseId": 10,
              "responseDescription": "Low",
              "isTextRequired": null
            }
          ],
        }*/
      ]
    }
  ]

  constructor() { }
}
