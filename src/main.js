import Vue from 'vue'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import { Toast,Button } from 'mint-ui'
import App from './App.vue'

// Vue.use(MintUI)
// Vue.use(Toast)
// Vue.component(Toast.name, Toast)
Vue.component(Button.name, Button)

Vue.prototype.$toast = Toast

new Vue({
  el: '#app',
  render: h => h(App)
})
