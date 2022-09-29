import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

Vue.use(VueAxios, axios)