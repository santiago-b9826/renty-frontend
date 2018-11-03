import Vue from 'vue'
import App from './App.vue'
import router from './router'
import auth from './services/auth'

Vue.config.productionTip = false;

new Vue({
    router,
    beforeCreate () {
        auth.init(this)
    },
    render: h => h(App)
}).$mount('#app');