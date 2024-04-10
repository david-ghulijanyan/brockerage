import { ref } from 'vue';
import { IconClose } from '../icons';
import { TestIDModalContent, TestIDModalOpener, TestIDModalRoot } from './__tests__/ids';

export default {
	name: "Modal",
	components: {
		IconClose
	},
	setup() {
		const showModal = ref(false);

		function openModal() {
			showModal.value = true;
		}

		function closeModal() {
			showModal.value = false;
		}

		return {
			showModal,
			openModal,
			closeModal,
			TestIDModalRoot,
			TestIDModalOpener,
			TestIDModalContent,
		};
	}
};
