export default class MarketingController {

    constructor(CountriesList, MarketingSummaryAPI) {
        this.$CountriesList = $CountriesList;
        this.MarketingSummaryAPI = MarketingSummaryAPI;
    }
}

MarketingController.$inject = ['CountriesListService', 'MarketingSummaryAPI'];
