import module from './src/store/modules/address_input';
import cmp from './src/components/address_input.vue';

function install(Vue, options = {}) {
    if (!options.store) console.log('Please provide a store!!')

    Vue.component('address-input', cmp)

    options.store.registerModule('addressInput', module)
}

export default {
    install
}