export default class SurveyContrller {

    constructor() {
        this.surveyResult = {
            "name": null,
            "emailAddress": null,
            "age": null,
            "gender": null,
            "country": null,
            "experiance": null,
            "suggestedImprovements": null,
            "originUrl": null,
        };
    }

    validateAndSubmitForm(form){
      form.submitted = true;
      if(!form.$valid){
          return;
      }
    }
}

SurveyContrller.$inject = [];
