import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todoList: [
			{
				text: 'book1',
				complete: false,
			},
			{
				text: 'book2',
				complete: false,
			},
		],
	},
	mutations: {
		updateTodoList(state, { index, content }) {
			state.todoList[index].text = content;
		},
		todoItemComplete(state, index) {
			state.todoList[index].complete = true;
		},
	},
	actions: {
	},
	modules: {
	},
});
