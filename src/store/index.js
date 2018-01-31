import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// import modules
import twzipcode from './modules/twzipcode';

export default new Vuex.Store({
    strict: true,
    modules: {
        twzipcode
    }
})