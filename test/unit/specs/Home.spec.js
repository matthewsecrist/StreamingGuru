import Vue from 'vue';
import Home from '@/containers/Home';

describe('Home.vue', () => {
  it('should render title', () => {
    const Constructor = Vue.extend(Home);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.title').textContent)
      .to.equal('Streaming.Guru');
  });
});
