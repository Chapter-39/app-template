import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import TheAppNav from "../TheAppNav.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [], // Add your routes here if needed
});

describe("TheAppNav", () => {
  it("renders properly", async () => {
    const pinia = createPinia();
    const wrapper = mount(TheAppNav, {
      global: {
        plugins: [pinia, router],
      },
    });
    await router.isReady();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("nav").exists()).toBe(true);
  });
});
