import {createStore} from "vuex";

const store = createStore({
	state() {
		return {
			services: [
				{name: "Puhka jalga",
					desc: "Siin on desc",
					img: ""},
			]
		}
	}
})

export default store;
