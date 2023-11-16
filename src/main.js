import { createApp } from 'vue'
import App from './App.vue'

// /* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* import solid icons */
import { faAngleDown, faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons'
// /* import regular icons */
import { faMap } from '@fortawesome/free-regular-svg-icons'

// /* add icons to the library */
library.add(faAngleDown, faBasketShopping, faUser, faMap)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')