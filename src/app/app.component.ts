import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IQuestionnaire} from "./models/questionnaire.interface";
import {QuestionnaireComponent} from "./questionnaire/questionnaire.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  sections = [
    {
      "sectionId": 2,
      "sectionName": "Diet",
      "questions": [
        {
          "questionId": 3,
          "questionTypeId": 5,
          "questionDescription": "Are you Mahesh?",
          "responseOptions": [],
        },
        {
          "questionId": 4,
          "questionTypeId": 5,
          "questionDescription": "Are you on a non-physician prescribed medical diet?",
          "responseOptions": [],
        },
        {
          "questionId": 93,
          "questionTypeId": 5,
          "questionDescription": "How many #  of  meals  you  eat  in  an  average  day",
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
    },
    {
      "sectionId": 3,
      "sectionName": "Personal Health",
      "questions": [
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
    }
  ]
  @ViewChild('questionnaireCmpt', { static: true }) questionnaireCmpt: QuestionnaireComponent;

  questionnaire:  BehaviorSubject<IQuestionnaire | undefined> =
    new BehaviorSubject<IQuestionnaire|undefined>(undefined);


  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  submit(values: any): void {
    console.log('Step completed');
    console.log(values);
    this.nextSection(1);
  }

  nextSection(id?: number) {
    this.questionnaire.next(this.sections[id])
  }

  ngOnInit() {
  }

}
