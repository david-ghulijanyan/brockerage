import { ref } from 'vue';
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
	setup(props, { emit }) {
		const showDropdown = ref(false);
		const searchQuery = ref('');
		const selectedItem = ref({ id: null, text: 'Choose' });
		const filteredOptions = ref(props.options);

		function toggleDropdown() {
			showDropdown.value = !showDropdown.value;
		}

		function filterOptions() {
			if (searchQuery.value) {
				filteredOptions.value = props.options.filter((option) =>
					option.text.toLowerCase().includes(searchQuery.value.toLowerCase())
				);
			} else {
				filteredOptions.value = props.options;
			}
		}

		function selectItem(option) {
			selectedItem.value = option;
			showDropdown.value = false;
			emit('update:selected', option);
			props.onChange?.(option);

		}

		return { showDropdown, searchQuery, filteredOptions, filterOptions, toggleDropdown, selectedItem, selectItem };
	}
};
