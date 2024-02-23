import { assert, expect, test, it, describe } from 'vitest';
import {config, mount, shallowMount} from "@vue/test-utils";
import HelloWorld from "../components/HelloWorld.vue";

 import Vuex from "vuex";


//config.showDeprecationWarnings = false;
describe('HelloWorld.vue', () => {
  const wrapper = shallowMount(HelloWorld, {
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


  it("HelloWorld contains prop msg with specific text", () => {
    expect(wrapper.props().msg).toBe('Vitest example');
  });


  it("HelloWorld contains h1 element with #pageTitle with text 'Vitest example'", () => {
    expect(wrapper.find('#pageTitle').html()).toContain('Vitest example');
  });


})

