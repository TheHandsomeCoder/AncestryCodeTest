export default class SurveyContrller {

    constructor(CountriesList, SurveyResultAPI) {
        this.countriesList = CountriesList.getCountries();
        this.SurveyResultAPI = SurveyResultAPI;
        this.surveyResult = {
            "name": null,
            "emailAddress": null,
            "age": null,
            "gender": null,
            "country": null,
            "experience": null,
            "suggestedImprovements": null,
            "originUrl": null,
        };
    }

    validateAndSubmitForm(form) {
        form.submitted = true;
        if (!form.$valid) {
            return;
        }

       this.SurveyResultAPI.createSurveyResult(this.surveyResult)
       .then((result) => {
            debugger;
       })
       .catch((error) => {
              debugger;
       })
    }
}

SurveyContrller.$inject = ['CountriesListService', 'SurveyResultAPI'];
