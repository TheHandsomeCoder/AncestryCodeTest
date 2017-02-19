export default class MarketingController {

    constructor(CountriesList, MarketingSummaryAPI) {
        this.CountriesList = CountriesList;
        this.MarketingSummaryAPI = MarketingSummaryAPI;
        this.marketingSummary = {};
        this.MarketingSummaryAPI.getMarketingSummary()
            .then((result) => {
                this.marketingSummary = result.data;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    parseGender(gender) {
        if (gender === 0 || gender === 1) {
            return gender === 0 ? "Male" : "Female";
        }
        return "Not Specified";
    }

}

MarketingController.$inject = ['CountriesListService', 'MarketingSummaryAPI'];
