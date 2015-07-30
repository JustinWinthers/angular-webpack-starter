export default ngModule => {

    require('./component2.less');

    ngModule.controller('Component2Controller',[function(){

        this.title = "Component 2 ViewPort"

    }])
};
