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
      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit" :disabled="isProcessing">Submit</button>


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
import authorizationAPI from "./../apis/authorization.js";
import { Toast } from "./../utils/helpers.js";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      isProcessing: false
    };
  },

  methods: {
    async handleCheck() {
      try {
        if (
          !this.name ||
          !this.email ||
          !this.password ||
          !this.passwordCheck
        ) {
          Toast.fire({
            type: "warning",
            title: "請確認已填寫所有欄位"
          });
          return;
        }

        if (this.password !== this.passwordCheck) {
          Toast.fire({
            type: "warning",
            title: "兩次輸入的密碼不同"
          });
          this.passwordCheck = "";
          return;
        }
        this.isProcessing = true;

        const { data, statusText } = await authorizationAPI.signUp({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(data.message);
        }

        Toast.fire({
          type: "success",
          title: data.message
        });

        this.$router.push("/signin");
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          type: "warning",
          title: `無法註冊 - ${error.message}`
        });
      }
    }
  }
};
</script>
