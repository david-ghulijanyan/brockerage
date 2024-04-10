import { describe, it, expect, vitest } from 'vitest';
import { mount } from '@vue/test-utils';
import Dropdown from './dropdown.vue';
import IconArrowDown from '../icons/IconArrowDown.vue';

describe('Dropdown', () => {
	it('renders dropdown trigger with default text', () => {
		const wrapper = mount(Dropdown);
		expect(wrapper.find('.dropdown-trigger span').text()).toContain('Choose');
	});

	it('displays options when triggered', async () => {
		const options = [{ id: 1, text: 'Option 1' }, { id: 2, text: 'Option 2' }];
		const wrapper = mount(Dropdown, { props: { options } });
		await wrapper.find('.dropdown-trigger').trigger('click');
		expect(wrapper.findAll('.dropdown-item').length).toBe(options.length);
	});

	it('filters options based on search query', async () => {
		const options = [{ id: 1, text: 'Apple' }, { id: 2, text: 'Banana' }];
		const wrapper = mount(Dropdown, { props: { options } });
		await wrapper.find('.dropdown-trigger').trigger('click');
		await wrapper.find('.dropdown-input').setValue('App');
		expect(wrapper.findAll('.dropdown-item').length).toBe(1);
	});

	it('emits "update:selected" when option is clicked', async () => {
		const options = [{ id: 1, text: 'Apple' }, { id: 2, text: 'Banana' }];
		const wrapper = mount(Dropdown, {
			props: { options },
			global: {
				components: {
					IconArrowDown
				}
			}
		});
		await wrapper.find('.dropdown-trigger').trigger('click');
		await wrapper.find('.dropdown-item').trigger('click');
		expect(wrapper.emitted()).toHaveProperty('update:selected');
	});

	it('calls onChange prop when option is clicked', async () => {
		const onChange = vitest.fn();
		const options = [{ id: 1, text: 'Apple' }, { id: 2, text: 'Banana' }];
		const wrapper = mount(Dropdown, {
			props: { options, onChange },
			global: {
				components: {
					IconArrowDown
				}
			}
		});
		await wrapper.find('.dropdown-trigger').trigger('click');
		await wrapper.find('.dropdown-item').trigger('click');
		expect(onChange).toHaveBeenCalled();
	});
});
