import module from './src/store/modules/address_input';
import twzipcode from './src/components/twzipcode.vue';



function install(Vue, options = {}) {
    if (!options.store) console.log('Please provide a store!!')

    Vue.component('twzipcode', twzipcode);

    options.store.registerModule('twzipcode', module)
}

export default {
    install
}