import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// import modules
import addressInput from './modules/address_input';

export default new Vuex.Store({
    strict: true,
    modules: {
        addressInput
    }
})