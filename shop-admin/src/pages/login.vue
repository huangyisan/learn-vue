<template>
    <el-row class="min-h-screen">
        <!-- 垂直水平方向居中-->
        <el-col :span="16" class="bg-indigo-500 flex items-center justify-center">
            <div>
                <div class="font-bold text-5xl text-light-50 mb-4">
                    欢迎
                </div>
                <div>
                    欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临
                </div>
            </div>
        </el-col>
        <el-col :span="8" class="bg-indigo-50 flex items-center justify-center flex-col">
            <h2 class="font-bold text-3xl text-gray-800">欢迎回来</h2>
            <div class="flex items-center justify-center my-5 text-gray-300 space-x-2">
                <span class="h-[1px] w-16 bg-gray-200"></span>
                <span>账号密码登录</span>
                <span class="h-[1px] w-16 bg-gray-200"></span>
            </div>
            <div>
                <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
                    <el-form-item prop="username">
                        <el-input v-model="form.username" placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="form.password" placeholder="请输入密码" show-password type="password" />
                    </el-form-item>

                    <el-form-item>
                        <el-button round color="#626aef" type="primary" @click="onSubmit"
                                   class="w-[250px]">登陆</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import { reactive, ref, } from 'vue'
import { login } from '~/api/manager'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
// do not use same name with ref
const form = reactive({
    username: "",
    password: "",
})

const rules = {
    username: [{ required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' }],
    password: [{ required: true, message: 'Please input password', trigger: 'blur' },
    { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' }]
}

const formRef = ref(null)

const onSubmit = () => {
    formRef.value.validate((valid) => {
        if (!valid) {
            return false
        }
        login(form.username, form.password).then(res => {
            console.log(res.data.data);
            // 通知登陆成功
            ElNotification({
                message: "登陆成功",
                type: "success",
                duration: 3000,
            })
            // 跳转到首页
            router.push("/")

        }).catch(err => {
            ElNotification({
                message: err.response.data.msg || "请求失败",
                type: "error",
                duration: 3000,
            })
        })
    })
}

</script>