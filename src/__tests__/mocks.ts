import Vuex from "vuex";


export default class mocks {
    constructor() { }

    public static readonly store = new Vuex.Store({
        state: {

            motorcycles: [],

        },
        mutations: {
            // setTestRecipe(state, value) {
            //   state.testRecipe = value;
            // },
        },
        getters: {

            motorcycles(state: any) {
                return state.motorcycles;
            },

        },
    });

    public static readonly $route = { path: '/motorcycles-mock', id: 2 }
//    public static readonly $el = { querySelectorAll: function(input){return '';} }
}