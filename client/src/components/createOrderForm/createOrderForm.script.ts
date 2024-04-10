import { Layout } from "../layout";
import { InputField } from "../input";
import { ButtonComponent } from "../button";
import { Dropdown } from "../dropdown";
import { SearchInput } from "../searchInput";
import { OrderBook } from "../orderBook";
import { IconArrowDown, IconClose, IconGlobe, IconInfo, IconMinus, IconNext, IconPlus, IconSearch } from "../icons";
import { Account } from "../account";
import { Actions } from "../actions";
import { Header } from "../header";
import { Instruments } from "../instruments";
import { OrderInfo } from "../orderInfo";
import { Values } from "../values";
import { Footer } from "../footer";

export default {
	name: "CreateOrderForm",
	components: {
		Layout,
		ButtonComponent,
		InputField,
		Dropdown,
		SearchInput,
		IconArrowDown,
		IconClose,
		IconGlobe,
		IconInfo,
		IconMinus,
		IconNext,
		IconPlus,
		IconSearch,
		OrderBook,
		Header,
		Account,
		Instruments,
		Actions,
		OrderInfo,
		Values,
		Footer
	},
	setup() {
		const options = [{
			id: 1,
			text: "asda"
		}];

		const orderBookData = [
			{ id: 1, buy: '-', price: '1221,2', sell: 186 },
			{ id: 2, buy: '-', price: '1221,1', sell: 27 },
			{ id: 3, buy: '-', price: '1221,0', sell: 1865 },
			{ id: 4, buy: '-', price: '1220,9', sell: 1264 },
			{ id: 5, buy: 86, price: '1221,1', sell: '-' },
			{ id: 6, buy: 86, price: '1221,1', sell: '-' },
			{ id: 7, buy: 431, price: '1221,1', sell: '-' },
			{ id: 8, buy: 1373, price: '1221,2', sell: '-' },
		];

		return {
			options,
			orderBookData
		};
	}
};
