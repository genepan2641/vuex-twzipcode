# vuex-twzipcode

Rewrite Vue2-twzipcode in Vuex way 

original repo was made by CasperLaiTW(https://github.com/CasperLaiTW/vue-twzipcode) and knovour(https://www.npmjs.com/package/vue2-twzipcode)

## Install
```
    npm install vuex-twzipcode --save
```

## Usage
### your root js file (or anywhere you put Vuex store in)
```js


    import Vue from 'vue'
    import App from './App'

    import addressInput from 'vuex-twzipcode';
    
    /* insert package module (which named "addressInput") and components */
    Vue.use(addressInput, { store }); 
    
    /* your original store */
    import store from './store' 

    new Vue({
        el: '#app',
        store,
        components: { App },
        template: '<App/>'
    })
```
### place component
The package will automatically register `<address-input>` as global component,
you can use it like so:

```js
    <div id="app">
        <address-input></address-input>
    </div>    
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
