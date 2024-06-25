<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form class="form" @submit.prevent="handleClick()">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="userInfo.username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="userInfo.password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="userInfo.nickname" />
        </div>
        <button
          type="submit"
          class="btn"
          :disabled="
            !validateEmail(userInfo.username) ||
            userInfo.password === '' ||
            userInfo.nickname === ''
          "
        >
          회원 가입
        </button>
      </form>
      <p class="log"></p>
    </div>
  </div>
</template>

<script setup>
import { signup } from '@/hooks/user.js';
import { ref } from 'vue';
import { validateEmail } from '@/utils/validation.js';

// data
const userInfo = ref({
  username: '',
  password: '',
  nickname: '',
});

// method
const { signupSubmit } = signup();
const handleClick = async () => {
  const res = await signupSubmit(userInfo.value);
  console.log(res);
};
</script>

<style scoped>
.color-red {
  color: red;
}
</style>
