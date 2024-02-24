import {expect,  it, describe } from 'vitest';
import {  shallowMount } from "@vue/test-utils";
import MotorcycleDetails from "../components/MotorcycleDetails.vue";
import mocks from './mocks.ts';

describe('MotorcyclesDetails.vue', () => {
  const wrapper = shallowMount(MotorcycleDetails, {

    global: {
      mocks: {
          $store: mocks.store,  // mocked store
          $route: mocks.$route  // mocked route with predefined id=2 (Triumph Rocket 3)
      }
    }
  });

  it("MotorcycleDetails component contains list with 2 motorcycles", () => {
    expect(wrapper.vm.$store.state.motorcycles.length).toBe(2);
  });

  it("MotorcycleDetails component receives route with id=2", () => {
    expect(wrapper.vm.$route.path).toBe(mocks.$route.path);

    console.log(wrapper.vm.$route.path);
    expect(wrapper.vm.$route.params.id).toBe(2);
  });

  it ("MotorcycleDetails component sets selectedMotorcycle as Triumph Rocket 3", () => {

    const serializedTriumph = JSON.stringify({
      id: 2,
      make: 'Triumph',
      model: 'Rocket 3',
      year: 2024,
      cc: 2458,
      userComment: null
    });

    expect(JSON.stringify(wrapper.vm.$data.selectedMotorcycle)).toBe(serializedTriumph);
  });

  it ("MotorcycleDetails component allows to update userComment for selected motorcycle", () => {

     const newComment = 'a beast!';

      wrapper.vm.$data.currentComment = newComment
      expect((wrapper.vm.$data.currentComment)).toBe(newComment);

      wrapper.vm.saveComment();

      const motorcycleUpdated  = wrapper.vm.$store.state.motorcycles.find(x => x.id === 2);

      expect(motorcycleUpdated.userComment).toBe(newComment);
  });
})

