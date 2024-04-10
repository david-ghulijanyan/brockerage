import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import Instruments from './instruments.vue';
import Dropdown from '../dropdown/dropdown.vue';
import ButtonComponent from '../button/button.vue';
import IconInfo from '../icons/IconInfo.vue';
import { useInstruments } from './instruments.store';

describe('Instruments', () => {
	it('renders instrument selectors', () => {
		const wrapper = mount(Instruments, {
			global: {
				components: {
					Dropdown,
					ButtonComponent,
					IconInfo
				},
				plugins: [createTestingPinia({
					createSpy: vi.fn,
				})]
			}
		});

		expect(wrapper.find('.selectors').exists()).toBe(true);
		expect(wrapper.findAllComponents(Dropdown).length).toBe(2);
	});

	it('renders instrument info', () => {
		const wrapper = mount(Instruments, {
			global: {
				components: {
					Dropdown,
					ButtonComponent,
					IconInfo
				},
				plugins: [createTestingPinia({
					createSpy: vi.fn,
				})]
			}
		});

		expect(wrapper.find('.info').exists()).toBe(true);
		expect(wrapper.findComponent(IconInfo).exists()).toBe(true);
	});

	it('renders instrument details', () => {
		const wrapper = mount(Instruments, {
			global: {
				components: {
					Dropdown,
					ButtonComponent,
					IconInfo
				},
				plugins: [createTestingPinia({
					createSpy: vi.fn,
				})]
			}
		});

		expect(wrapper.find('.details').exists()).toBe(true);
	});

	it('calls getInstruments on type change', async () => {
		const wrapper = mount(Instruments, {
			global: {
				components: {
					Dropdown,
					ButtonComponent,
					IconInfo
				},
				plugins: [createTestingPinia({
					createSpy: vi.fn,
					stubActions: false
				})]
			}
		});

		wrapper.findComponent(Dropdown).vm.$emit('change');
		const pinia = wrapper.vm.$pinia;
		const store = useInstruments(pinia);
		await wrapper.vm.$nextTick();

		expect(store.getInstruments).toHaveBeenCalled();
	});
});
