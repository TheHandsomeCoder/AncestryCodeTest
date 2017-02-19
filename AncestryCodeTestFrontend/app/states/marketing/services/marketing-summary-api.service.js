import angular from 'angular';

export default class MarketingSummaryAPI {
  constructor($http, endpoint) {
    this.$http = $http;
    this.apiEndpoint = endpoint;
  }

  getMarketingSummary(MarketingSummary) {
    return this.$http.get(`${this.apiEndpoint}/MarketingSummary`);
  }


}

MarketingSummaryAPI.$inject = ['$http', 'api-endpoint'];