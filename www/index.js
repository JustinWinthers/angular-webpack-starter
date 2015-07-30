(function(){

    const bootstrap = require('bootstrap-webpack');
    const angular = require('angular');
    const router = require('angular-new-router');


    const ngModule = angular.module('app',[
        'ngNewRouter'
    ]);

    require ('./css/app.less');

    require('./components/nav/nav.js')(ngModule);
    require('./components/home/home.js')(ngModule);
    require('./components/component1/component1.js')(ngModule);
    require('./components/component2/component2.js')(ngModule);
    require('./directives')(ngModule);
    require('./routes')(ngModule);


})();