import { mande } from "mande";
import { defineStore } from "pinia";

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
			const api = mande(import.meta.env.VITE_API_URL + "/api/v1/instruments");

			try {
				const response = await api.get({ query: { type: this.type } });
				this.list = (response as any)?.data?.map((item: any) => ({ id: item.id, text: item.name }));

			} catch (error: any) {
				console.log(`${error?.message}`);
			}
		},
	},
});