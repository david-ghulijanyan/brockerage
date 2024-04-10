import { mande } from "mande";
import { defineStore } from "pinia";

const api = mande(import.meta.env.VITE_API_URL + "/api/v1/instruments");

export const useInstruments = defineStore("instruments", {
	state: () => ({
		type: "us",
		types: [
			{
				id: "us",
				text: "US store"
			},
			{
				id: "eu",
				text: "EU store"
			}
		],
		list: []
	}),

	actions: {
		async getInstruments() {
			try {
				const response = await api.get({ query: { type: this.type } });
				this.list = response?.data?.map(item => ({ id: item.id, text: item.name }));

			} catch (error) {
				alert(error?.message);
			}
		},
	},
});