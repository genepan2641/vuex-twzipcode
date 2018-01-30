import module from './src/store/modules/address_input';
import addressInput from './src/components/address_input.vue';
import twzipcode from './src/components/twzipcode.vue';



function install(Vue, options = {}) {
    if (!options.store) console.log('Please provide a store!!')

    Vue.component('address-input', addressInput);
    Vue.component('twzipcode', twzipcode);

    options.store.registerModule('addressInput', module)
}

export default {
    install
}