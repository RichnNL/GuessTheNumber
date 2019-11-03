import { mount } from '@vue/test-utils'
import GNHeader from '@/components/GNHeader.vue'

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(GNHeader);
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
