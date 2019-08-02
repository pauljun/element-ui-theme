<template>
    <div class="hello">
        <div>
            <h1>刷新换肤</h1>
			<div class="block">
				<span @click="change(item.value)" v-for="(item, i) in list" :key="i" :style="{background: item.value}"></span>
			</div>
			<el-button type="primary">element-ul 颜色</el-button>
			<div class="var">变量颜色测试</div>
        </div>
    </div>
</template>

<script>
const list = [
	{ label: '蓝色', value: 'blue' },
	{ label: '红色', value: 'red' },
	{ label: '橙色', value: 'orange' }
]

export default {
	data() {
		return {
			list
		}
	},
	methods: {
		change(val) {
			localStorage.theme = val
			window.location.reload()
		}
	}
}
</script>

<style scoped lang="scss">
.block{
	margin-bottom: 10px;
	span{
		display: inline-block;
		width: 80px;
		height: 80px;
		margin: 0 20px;
	}
}
.var{
	color: var(--Main);
}
</style>
