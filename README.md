# vuex-twzipcode

Rewrite Vue2-twzipcode in Vuex way 

original repo was made by
[CasperLaiTW](https://github.com/CasperLaiTW/vue-twzipcode)(vue-twzipcode) and [knovour](https://www.npmjs.com/package/vue2-twzipcode)(vue2-twzipcode)

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

