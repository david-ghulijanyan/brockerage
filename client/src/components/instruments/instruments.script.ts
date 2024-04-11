import { ButtonComponent } from "../button";
import { Dropdown } from "../dropdown";
import { IconInfo } from "../icons";
import { storeToRefs } from "pinia";
import { useInstruments } from "./instruments.store";

export default {
	name: "Instruments",
	components: {
		Dropdown,
		ButtonComponent,
		IconInfo
	},
	setup() {
		const store = useInstruments();

		const { list, type, types, listUpdateKey } = storeToRefs(store);
		const { getInstruments } = store;

		return {
			list: list,
			type: type,
			types: types,
			getInstruments,
			listUpdateKey
		};
	}
}; 