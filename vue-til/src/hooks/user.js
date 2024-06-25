import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
// import { ref } from 'vue';

function login() {
  const store = useStore();
  const route = useRouter();
  async function loginSubmit(userInfo) {
    try {
      const res = await store.dispatch('user/LOGIN', userInfo);
      route.push('/main');
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  return { loginSubmit };
}
function signup() {
  const store = useStore();
  async function signupSubmit(userInfo) {
    try {
      const res = await store.dispatch('user/SIGNUP', userInfo);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  return { signupSubmit };
}

export { login, signup };
