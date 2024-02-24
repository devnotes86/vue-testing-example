import Vuex from "vuex";


export default class mocks {
    constructor() { }

    public static readonly store = new Vuex.Store({
        state: {

            motorcycles: [
                {
                    id: 1,
                    make: 'Suzuki',
                    model: 'Intruder',
                    year: 2003,
                    cc: 1783,
                    userComment: null
                },
                {
                    id: 2,
                    make: 'Triumph',
                    model: 'Rocket 3',
                    year: 2024,
                    cc: 2458,
                    userComment: null
                },

            ],

        },
        actions: {
            updateMotorcycle(context: any, payload: any) {
                context.commit('setMotorcycle', payload)
            }
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
        getters: {

            motorcycles(state: any) {
                return state.motorcycles;
            },

        },
    });

    public static readonly $route = { path: '/motorcycles-mock', params: { id: 2 } }
}