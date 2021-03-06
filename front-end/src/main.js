import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHandPointUp, faThumbsUp, faFolderOpen, faSquareArrowUpRight, faShieldCat, faGear, faTable, faArrowsDownToLine, faStar, faUserGroup, faCircleCheck, faQuoteRight, faLocationDot, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faAppStoreIos, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'


library.add(
    faFacebook, 
    faTwitter, 
    faInstagram, 
    faAppStoreIos, 
    faGooglePlay, 
    faHandPointUp,
    faThumbsUp,
    faFolderOpen,
    faSquareArrowUpRight,
    faShieldCat,
    faGear,
    faTable,
    faArrowsDownToLine,
    faStar,
    faUserGroup,
    faCircleCheck,
    faQuoteRight,
    faLocationDot,
    faPhone,
    faEnvelopeOpen,
    )


createApp(App)
.component('fa', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
