export default ngModule => {
    ngModule.directive('hello', () => {

        require('./hello.styl');

        return {
            restrict: 'E',
            scope: {},
            //note: you can also require the template like so
            //template: require('./hello.html'),
            template: `
                <div class="hello">
                    inline template from ES6
                </div>
                <p>
                    {{vm.greeting}}
                </p>
                `,
            controllerAs: 'vm',
            controller: function(){
                var vm = this;
                vm.greeting = "Hello From The Angular Webpack Starter Directive"
            }

        }
    })
}
