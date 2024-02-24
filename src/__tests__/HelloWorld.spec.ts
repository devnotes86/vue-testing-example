import {expect,  it, describe } from 'vitest';
import {shallowMount} from "@vue/test-utils";
import HelloWorld from "../components/HelloWorld.vue";

describe('HelloWorld.vue', () => {
  const helloWorldMessage = "Motorcycles listing";

  const wrapper = shallowMount(HelloWorld, {
    propsData: {
      msg: helloWorldMessage
    },
    global: {
    }
  });

  it("HelloWorld contains prop msg with specific text", () => {
    expect(wrapper.props().msg).toBe(helloWorldMessage);
  });

  it("HelloWorld contains h1 element with #pageTitle with text 'Vitest example'", () => {
    expect(wrapper.find('#pageTitle').html()).toContain(helloWorldMessage);
  });
})

