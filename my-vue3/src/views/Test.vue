<template>
    <div class="form-container">
        <el-form>
            <el-form-item>
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button>提交</el-button>
            </el-form-item>
        </el-form>
    </div>
    <div>{{form.username}}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// import { ElButton } from 'element-plus'
export default defineComponent({
    name: 'Test',
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    }
})
</script>
<style scoped>
.form-container {
    width: 20%;
    margin: .625rem auto;
}
.el-form-item {
    margin: .625rem
}
</style>