import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { createStore, Store } from 'vuex';
import createPersistedState from 'vuex-persistedstate'



const motorcyclesModule = {

    state() {
        return {
            motorcycles: [
                {
                    id: 1,
                    make: 'BMW',
                    model: 'S 1000 RR',
                    year: 2023,
                    cc: 999
                },
                {
                    id: 2,
                    make: 'Honda',
                    model: 'CB600 Hornet',
                    year: 2008,
                    cc: 599
                },
                {
                    id: 3,
                    make: 'Ducati',
                    model: 'Diavel',
                    year: 2024,
                    cc: 1158
                },
                {
                    id: 4,
                    make: 'Harley Davidson',
                    model: 'Fat Boy 114',
                    year: 2024,
                    cc: 1868
                },
            ]
        };
    },
    mutations: {
        setMotorcycles(state: any, payload: any) {
            state.motorcycles = payload;
        }
    },
    actions: {
        updateMotorcycles(context: any, payload: any) {
            context.commit('setMotorcycles', payload)
        }
    },
    getters: {

        motorcycles(state: any) {
            return state.motorcycles;
        }
    }
};

const store = createStore({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    modules: {
        motorcycles: motorcyclesModule
    }
});

export default store;


createApp(App).use(router).use(store).mount('#app')
