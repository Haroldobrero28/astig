import Vue from 'vue';
import axios from 'axios';

const guest = axios.create({
    baseURL: "http://localhost/user",
    headers: {
        "Content-Type": 'application/x-wwww-form-urlencoded',
        "X-Requested-With": 'XMLHttpRequest',
    },
}); 

Vue.prototype.$guest = guest;

export {guest};