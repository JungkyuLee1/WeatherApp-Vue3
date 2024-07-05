import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//Import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';
//Import fontawesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//사용할 Icon 불러오기
import { faBarsStaggered, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import store from './store/store';

//Icon 등록하기
library.add(faBarsStaggered, faLocationDot, faMagnifyingGlass);

createApp(App).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
