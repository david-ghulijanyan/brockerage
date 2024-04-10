import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ButtonComponent from './button.vue';

describe('ButtonComponent', () => {
	it('renders slot content', () => {
		const wrapper = mount(ButtonComponent, {
			slots: { default: 'Click me!' }
		});
		expect(wrapper.text()).toContain('Click me!');
	});

	it('has the correct default classes', () => {
		const wrapper = mount(ButtonComponent);
		const button = wrapper.find('.button');
		expect(button.classes()).toContain('button');
		expect(button.classes()).not.toContain('primary');
		expect(button.classes()).not.toContain('secondary');
	});

	it('can be styled as primary', async () => {
		const wrapper = mount(ButtonComponent, {
			props: { class: 'primary' }
		});
		await wrapper.vm.$nextTick();
		expect(wrapper.classes()).toContain('primary');
	});

	it('can be styled as secondary', async () => {
		const wrapper = mount(ButtonComponent, {
			props: { class: 'secondary' }
		});
		await wrapper.vm.$nextTick();
		expect(wrapper.classes()).toContain('secondary');
	});
});
