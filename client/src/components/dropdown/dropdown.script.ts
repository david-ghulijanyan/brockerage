import { ref, watch } from 'vue';
import { IconArrowDown } from '../icons';

export default {
	name: 'Dropdown',
	components: {
		IconArrowDown
	},
	props: {
		options: {
			type: Array,
			default: () => []
		},
		onChange: {
			type: Function
		}
	},
	setup(props: any, { emit }: { emit: any; }) {
		const showDropdown = ref(false);
		const searchQuery = ref('');
		const selectedItem = ref({ id: null, text: 'Choose' });
		const filteredOptions = ref(props.options);

		watch(() => props.options, (newOptions) => {
			filteredOptions.value = newOptions;
			filterOptions();
		});


		function toggleDropdown() {
			showDropdown.value = !showDropdown.value;
		}

		function filterOptions() {
			if (searchQuery.value) {
				filteredOptions.value = props.options.filter((option: any) =>
					option.text.toLowerCase().includes(searchQuery.value.toLowerCase())
				);
			} else {
				filteredOptions.value = props.options;
			}
		}

		function selectItem(option: any) {
			selectedItem.value = option;
			showDropdown.value = false;
			emit('update:selected', option);
			props.onChange?.(option);
		}

		return { showDropdown, searchQuery, filteredOptions, filterOptions, toggleDropdown, selectedItem, selectItem };
	}
};
