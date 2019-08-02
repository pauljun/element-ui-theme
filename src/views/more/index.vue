<template>
	<div class="hello">
		<div>
			<h1>刷新换肤</h1>
			<div class="block">
				<span
					@click="change(item)"
					v-for="(item, i) in list"
					:key="i"
					:style="{ background: item.value }"
				></span>
			</div>
			<el-button type="primary">element-ul 颜色</el-button>
			<div class="var">变量颜色测试</div>
		</div>
	</div>
</template>

<script>
const list = [
	{ label: '蓝色', value: '#409EFF', key: 'blue' },
	{ label: '红色', value: '#F56C6C', key: 'red' },
	{ label: '橙色', value: '#E6A23C', key: 'orange' }
]

export default {
	data() {
		return {
			list
		}
	},
	methods: {
		change(val) {
			localStorage.theme = val.value
			document.body.className = 'body-theme-' + val.key
			document.documentElement.style.setProperty('--Main', val.value)
		}
	}
}
</script>

<style scoped lang="scss">
@import './index.scss';
.block {
	margin-bottom: 10px;
	span {
		display: inline-block;
		width: 80px;
		height: 80px;
		margin: 0 20px;
	}
}
.var {
	color: var(--Main);
}
</style>
