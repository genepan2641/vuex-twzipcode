# vuex-twzipcode

Rewrite Vue2-twzipcode in Vuex way 

original repo was made by CasperLaiTW(https://github.com/CasperLaiTW/vue-twzipcode) and knovour(https://www.npmjs.com/package/vue2-twzipcode)

## Install
```
    npm install vuex-twzipcode --save
```

## Usage
```js
    // in your root js file where you put Vuex store in 
    
    import Vue from 'vue'
    import App from './App'

    import addressInput from 'vuex-twzipcode';
    
    /**
     *insert package module(which is named "addressInput") and components
     */
    Vue.use(addressInput, { store }); 
    

    import store from './store' // your original store

    new Vue({
        el: '#app',
        store,
        components: { App },
        template: '<App/>'
    })
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
