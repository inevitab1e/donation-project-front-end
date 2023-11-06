import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import project from './modules/project';
import child from './modules/child';

Vue.use(Vuex)

const store = new Vuex.Store({
    // strict: true,
    // state: {
        
    // },
    // // 相当于Vuex中的计算属性
    // getters: {
       
    // },
    // mutations: {
    //     // 同步操作 只有这里面的函数可以更改数据
        
    // },
    // actions: {
    //     // 异步操作
    //     // 一般是先发请求 然后调用mutations里的方法改数据
    // },
    modules: {
        user,
        project,
        child,
    }
})

export default store