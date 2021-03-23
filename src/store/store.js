import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        isLoggedIn: false,
    },
    getters: {
        loginState: (state) => {
            return state.isLoggedIn;
        }
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
            if(router.currentRoute.name !== 'Home');
            router.push('/home');
        },
        logout(state) {
            // so pag nag logout i reremove naten yung token na nakasave sa
            // local storage
            state.isLoggedIn = false;
            localStorage.removeItem('token');
            localStorage.removeItem('expires');
            
            //after maremove ipupush naten si user sa login.
            router.push("/signin");
        }
    },
    actions : {
        login({commit}, expires_in){
            setTimeout( () => {
                commit("logout"); //so dito kinocommit naten yung logout by
            }, expires_in);       // using the expiration of the token so pag
            commit("login");      // expire na yung token automatic logout na hehe
        },
        logout({commit}) {
            commit("logout"); //and dito naman kung ilalogout mo agad
        }
    }
})

