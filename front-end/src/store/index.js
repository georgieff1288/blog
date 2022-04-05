import { createStore } from 'vuex'

export default createStore({
    state: {
        user: '',
    },
    mutations: {
        login(state, data) {
            state.user = data;
        },
        logout(state) {
            state.user = '';
        }
    },
    actions: {
    },
    modules: {
    },
    getters: {
        user(state) {
            return state.user;
        }
    }
})
