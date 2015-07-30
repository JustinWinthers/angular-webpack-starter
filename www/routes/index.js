export default ngModule => {


    ngModule.controller('AppController', ['$router', function ($router) {

        this.application = 'Erin Peterson Fund'

        $router.config([
            {path: '/', components: {'nav':'nav','main':'home'} },
            {path: '/component1', components: {'nav':'nav','main':'component1'} },
            {path: '/component2', components: {'nav':'nav','main':'component2'} }
        ]);


    }]);

};