<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form class="form" @submit.prevent="handleClick(userInfo.username)">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="userInfo.username" />
          <p class="validation-text" v-if="!validateEmail(userInfo.username)">
            <span class="warning"> Please enter an email address </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="userInfo.password" />
        </div>
        <button type="submit" class="btn">로그인</button>
      </form>
      <p class="log"></p>
    </div>
  </div>
</template>

<script>
import { login } from '@/hooks/user.js';
import { ref } from 'vue';
import { validateEmail } from '@/utils/validation.js';

export default {
  setup() {
    //data
    const userInfo = ref({
      username: '',
      password: '',
    });

    //method
    const { loginSubmit } = login();
    return { userInfo, validateEmail, loginSubmit };
  },
  methods: {
    async handleClick(username) {
      try {
        console.log(username);
        const res = await this.loginSubmit(this.userInfo);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.btn {
  color: white;
}
</style>
