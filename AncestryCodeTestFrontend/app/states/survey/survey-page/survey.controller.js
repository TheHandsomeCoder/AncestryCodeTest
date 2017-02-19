export default class SurveyController {

    constructor(CountriesList, SurveyResultAPI, $state, $stateParams) {
        this.$state = $state;
        this.countriesList = CountriesList.getCountries();
        this.SurveyResultAPI = SurveyResultAPI;
        this.$stateParams = $stateParams;
        this.surveyResult = {
            "name": null,
            "emailAddress": null,
            "age": null,
            "gender": null,
            "country": null,
            "experience": null,
            "suggestedImprovements": null,
            "originUrl": $stateParams.originUrl || null,
        };
    }

    validateAndSubmitForm(form) {
        form.submitted = true;
        if (!form.$valid) {
            return;
        }

       this.SurveyResultAPI.createSurveyResult(this.surveyResult)
       .then((result) => {
             this.$state.go('survey-thanks', {'originUrl': this.surveyResult.originUrl});
       })
       .catch((error) => {
              console.error(error);
       });
    }
}

SurveyController.$inject = ['CountriesListService', 'SurveyResultAPI', '$state', '$stateParams'];
