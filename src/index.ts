'use strict'

import './style/main.scss'
import * as Vue from 'vue/dist/vue.runtime.min.js'
import * as App from './components/App.vue'

new Vue({
    el: '#app',
    render: h => h(App)
})
