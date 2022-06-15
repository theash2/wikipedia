<template>
  <div class="register">
    <div class="registerContainer">
      <h4>注册</h4>
      <el-input
        v-model="username"
        placeholder="请输入用户名"
        class="username"
        @blur="checkUser"
      ></el-input>
      <el-input
        v-model="password"
        placeholder="请输入密码"
        class="password"
        show-password
        @blur="checkPwd"
      ></el-input>
      <el-button type="primary" @click="register">注册</el-button>
    </div>
  </div>
</template>

<script>
import { ElMessage,ElMessageBox } from "element-plus";
import { Register } from "../services/apis";
export default {
  name: "register",
  setup(props, contents) {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    RegisterToIndexDialog() {
      ElMessage.success("注册成功,跳转到首页");
    },
    RegisterWarnDialog(){

    },
    register() {
      if (this.checkUser() && this.checkPwd()) {
        console.log(this.username, this.password);
        Register({username:this.username,password:this.password})
          .then((result) => {
            if (result==true) {
              
              this.RegisterToIndexDialog();
              this.$router.push("./index");
            }
          })
          .catch((err) => {
            console.log('register_err',err);
          });
      }else{

      }
    },
    // 验证登陆用户名
    checkUser() {
      if (this.username == "") {
        ElMessage.warning("用户名不能为空");
      } else {
        return true;
      }
    },
    //验证登陆密码格式
    checkPwd() {
      if (this.password == "") {
        ElMessage.warning("密码不能为空");
      } else if (
        this.password.search(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/) ==0
      ) {
        this.passwordtip = "";
        return true;
      } else {
        ElMessage.warning("密码必须6-20位，包含字母与数字");
      }
    },
  },
};
</script>

<style>
.registerContainer {
  position: absolute;
  right: 10%;
  width: 300px;
  padding: 50px;
  padding-top: 10px;
  box-shadow: 0 2px 4px rgba(5, 5, 5, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-color: #d3ccd6;
}
.username {
  margin-bottom: 20px;
}
.password {
  margin-bottom: 20px;
}
</style>
