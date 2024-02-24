import {expect,  it, describe } from 'vitest';
//import {config, mount, shallowMount} from "@vue/test-utils";
import {  shallowMount } from "@vue/test-utils";
import Motorcycles from "../components/Motorcycles.vue";

// import Vuex from "vuex";


//config.showDeprecationWarnings = false;
describe('Motorcycles.vue', () => {
  const wrapper = shallowMount(Motorcycles, {
    propsData: {
      msg: 'Vitest example'
    },
    global: {

    //  plugins: [Vuex],

      // mocks: {
      //   // $store: mocks.store,
      //   // $route: mocks.$route,
      //   // Urls: Urls
      // }
    }
  });


  it("Motorcycles contains prop msg with specific text", () => {
    expect(wrapper.props().msg).toBe('Vitest example');
  });


  it("Motorcycles contains h1 element with #pageTitle with text 'Vitest example'", () => {
    expect(wrapper.find('#pageTitle').html()).toContain('Vitest example');
  });


})

