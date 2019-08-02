<template>
    <div class="hello">
		<div>
			<h1>动态换肤</h1>
			<theme-picker></theme-picker>
			<el-button type="primary">测试</el-button>
			<div class="var">变量</div>
		</div>
    </div>
</template>

<script>
import ThemePicker from '../../components/ThemePicker/index.vue'

export default {
    name: 'HelloWorld',
    components: {
        ThemePicker
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.var {
    color: var(--Main);
}
</style>
