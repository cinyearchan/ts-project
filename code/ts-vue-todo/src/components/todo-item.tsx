import { Component, Watch, Prop, Vue } from 'vue-property-decorator';
import './index.less';

interface Item {
	text: string;
	complete: boolean;
}

@Component({
	name: 'TodoItem',
})
export default class TodoItem extends Vue {
	@Prop(Object) public item!: Item;
	@Prop(Number) public index!: number;
	@Prop(Number) public edittingIndex!: number;

	public edittingContent = '';

	@Watch('edittingIndex')
	public edittingChange(index) {
		if (index === this.index) {
			this.edittingContent = this.item.text;
		} else {
			this.edittingContent = '';
		}
	}

	public save() {
		this.$emit('on-save', {
			index: this.index,
			content: this.edittingContent,
		});
	}

	public edit() {
		this.$emit('on-edit', this.index);
	}

	public cancel() {
		this.$emit('on-cancel');
	}

	public complete() {
		this.$emit('on-complete', this.index);
	}

	protected render() {
		return (
		<li class='item-wrap' on-click={this.complete}>
			{
				this.edittingIndex === this.index
				? (
					<div>
						<a-input v-model={this.edittingContent} style='width:200px;'></a-input>
						<a-icon type='check' nativeOn-click={this.save}></a-icon>
						<a-icon type='close' nativeOn-click={this.cancel}></a-icon>
					</div>
				) : (
					<div>
						<span style={this.item.complete ? {textDecoration: 'line-through'} : {}}>{this.item.text}</span>
						<a-icon type='edit' nativeOn-click={this.edit}></a-icon>
					</div>
				)
			}
		</li>
		);
	}
}
