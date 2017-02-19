export default class SurveyController {

    constructor(CountriesList, SurveyResultAPI, $state) {
        this.$state = $state;
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
             this.$state.go('survey-thanks', result.data);
       })
       .catch((error) => {
              debugger;
       })
    }
}

SurveyController.$inject = ['CountriesListService', 'SurveyResultAPI', '$state'];
