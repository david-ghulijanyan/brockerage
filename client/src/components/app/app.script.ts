import { CreateOrderForm } from "../createOrderForm";
import { Modal } from "../modal";
import { TestIDAppRoot } from "./__tests__/ids";

export default {
	components: {
		Modal,
		CreateOrderForm
	},
	setup() {
		return {
			TestIDAppRoot
		};
	}
};

