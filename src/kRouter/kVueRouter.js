let Vue;

//1.实现插件 挂载$router
class kVueRouter {
    constructor(options){
        this.$options=options
    }
}

kVueRouter.install=function (_Vue) {
    //保存构造函数到kVueRouter中去使用
    Vue=_Vue
    //挂载router  如何获取根实例里边的router选项
    Vue.mixin({
        beforeCreate(){
            console.log('全局混入',this);
        },
    })
}

export default kVueRouter