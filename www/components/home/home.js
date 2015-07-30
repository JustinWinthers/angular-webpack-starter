export default ngModule => {

    require ('./home.less');

    ngModule.controller('HomeController',[function(){
            this.name= 'Justin';
        }])
};
