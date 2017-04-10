<template>
  <div class="loginMain">
    <div>
        用户名
        <input type="text" v-model="user">
        密码
        <input type="text" v-model="password">
      <button @click="loginBtn()">确定</button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        password: '',
        user: ''
      }
    },
    methods: {
      loginBtn () {
        let obj = {
          user: this.user,
          password: this.password
        }
        this.$http.post('/api/getLogin', obj)
        .then((response) => {
          console.log(response)
        })
        .catch((reject) => {
          console.log(reject)
        })
      }
    }
  }
</script>
<style lang="less">
  .loginMain {
    display:flex;
    justify-content: center;
    flex-direction: column;
  }
</style>