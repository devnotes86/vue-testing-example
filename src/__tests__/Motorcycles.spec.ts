import {expect,  it, describe } from 'vitest';
//import {config, mount, shallowMount} from "@vue/test-utils";
import {  shallowMount } from "@vue/test-utils";
import Motorcycles from "../components/Motorcycles.vue";
import mocks from './mocks.ts';

describe('Motorcycles.vue', () => {
  const wrapper = shallowMount(Motorcycles, {

    global: {
      mocks: {
          $store: mocks.store,
      }
    }
  });


  it("Motorcycles component contains list with 2 motorcycles", () => {
    expect(wrapper.vm.$store.state.motorcycles.length).toBe(2);
  });

  it("Motorcycles component contains motorcycle Suzuki Intruder", () => {

    const serializedIntruder = JSON.stringify({
      id: 1,
      make: 'Suzuki',
      model: 'Intruder',
      year: 2003,
      cc: 1783
    });

    const serializedIntruderFromStore = JSON.stringify(wrapper.vm.$store.state.motorcycles[0]);

    expect(serializedIntruderFromStore).toBe(serializedIntruder);
  });

})

