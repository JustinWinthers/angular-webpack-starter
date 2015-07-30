export default ngModule => {

    require ('./component1.styl');

    ngModule.controller('Component1Controller',[function(){

        this.title = "Component 1 ViewPort"

    }])
};
