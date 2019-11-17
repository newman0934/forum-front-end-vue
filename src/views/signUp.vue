<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleCheck">

      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <!-- name輸入框 -->
      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input id="name" name="name" v-model="name" type="text" class="form-control" placeholder="name"
          required autofocus>
      </div>

      <!-- email輸入框 -->
      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" v-model="email" class="form-control"
          placeholder="email" required>
      </div>

      <!-- password輸入框 -->
      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input id="password" name="password"  v-model="password"  type="password"  class="form-control"
          placeholder="Password" required>
      </div>

      <!-- passwordCheck輸入框 -->
      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input id="password-check" name="passwordCheck" v-model="passwordCheck" type="password" class="form-control"
          placeholder="Password" required>
      </div>

      <!-- 送出表單按鈕 -->
      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">Submit</button>


      <!-- 登入頁面 -->
      <div class="text-center mb-3">
        <p><router-link to="/signin">Sign In</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: ""
    };
  },
  
  methods: {
    handleCheck(e) {
      const data = JSON.stringify({
        name: this.name,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck
      });
      console.log("data", data);
    }
  }
};
</script>
