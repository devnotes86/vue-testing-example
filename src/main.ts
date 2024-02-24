import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { createStore } from 'vuex';
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
                    cc: 999,
                    userComment: "fastest motorcycle"
                },
                {
                    id: 2,
                    make: 'Honda',
                    model: 'CB600 Hornet',
                    year: 2008,
                    cc: 599,
                    userComment: null
                },
                {
                    id: 3,
                    make: 'Ducati',
                    model: 'Diavel',
                    year: 2024,
                    cc: 1158,
                    userComment: null
                },
                {
                    id: 4,
                    make: 'Harley Davidson',
                    model: 'Fat Boy 114',
                    year: 2024,
                    cc: 1868,
                    userComment: null
                },
            ]
        };
    },
    mutations: {
        setMotorcycle(state: any, payload: any) {
            // find and remove old motorcycle by id
            const updatedArray = state.motorcycles.filter(item => item.id !== payload.id);

            // add updated motorcycle
            updatedArray.push(payload);

            console.log(updatedArray);

            // assign new array to state.motorcycles
            state.motorcycles = updatedArray;

        }
    },
    actions: {
        updateMotorcycle(context: any, payload: any) {
            context.commit('setMotorcycle', payload)
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
