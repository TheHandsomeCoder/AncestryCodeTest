import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/marketing.route.config';
import MarketingController from './marketing-page/marketing.controller';
import MarketingSummaryAPI from './services/marketing-summary-api.service';

export default angular.module('app.marketing', [uirouter])
    .config(routes)
    .controller('MarketingController', MarketingController)
    .service('MarketingSummaryAPI', MarketingSummaryAPI)
    .name;  //export the name of the module so we can register it the parent app