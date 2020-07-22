<template>
  <div class="todo-page">
    <ul>
      <todo-item
				v-for="(item, index) in list" 
				:key="item.text" :item="item" 
				:index="index" 
				:editting-index="edittingIndex"
				@on-save="handleSave"
				@on-edit="handleEdit"
				@on-cancel="handleCancel"
				@on-complete="handleComplete"></todo-item>
    </ul>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import TodoItem from '../components/todo-item'
import { State, Mutation } from 'vuex-class'

@Component({
  name: 'TodoPage',
  components: {
    TodoItem,
  },
})

export default class TodoPage extends Vue {
	@State('todoList') public list
	@Mutation('updateTodoList') public updateList
	@Mutation('todoItemComplete') public completeList
  public edittingIndex = -1
	
	public handleSave({index, content}) {
		// this.list[index].text = content
		this.updateList({ index, content })

		this.handleCancel()
	}

	public handleEdit(index) {
		this.edittingIndex = index
	}

	public handleCancel() {
		this.edittingIndex = -1
	}

	public handleComplete(index) {
		// this.list[index].complete = true
		// this.updateList({ index, complete: true })
		this.completeList(index)
	}
}

</script>
