<template>
  <header>
    <div>
      <div class="logo">
        TIL
        <router-link :to="`${isLogPath}`">by</router-link>
      </div>
    </div>
    <div class="navigations">
      <template v-if="isLogin">
        <a class="logout-button" @click="logout"> Logout </a>
      </template>
      <!-- 1 -->
      <!-- 2 -->
      <template v-else>
        <router-link :to="`/login`">로그인</router-link>
        <router-link :to="`/signup`">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { deleteCookie } from '@/utils/cookies.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
const isLogin = computed(() => store.getters['user/isLogin']);
const isLogPath = computed(() => {
  return isLogin.value ? '/main' : '/login';
});
console.log(`isLogPath ${isLogPath.value}`);
function logout() {
  deleteCookie('til_user');
  deleteCookie('til_auth');
  store.commit('user/clearToken');
  store.commit('user/clearUserName');
  router.push('/login');
}
</script>

<style scoped>
.username {
  color: white;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}

a {
  color: #dedede;
  font-size: 18px;
}

a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}

.logo > span {
  font-size: 14px;
  font-weight: normal;
}

.navigations a {
  margin-left: 10px;
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}

.logout-button {
  font-size: 14px;
}

a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
