<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="createSubmit">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="postData.title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea
            id="contents"
            type="text"
            v-model="postData.contents"
            rows="5"
          />
          <p class="validation-text warning">
            Contents length must be less than 250
          </p>
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
      <p class="log"></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore();
const router = useRouter();
const postData = ref({
  title: '',
  contents: '',
});

async function createSubmit() {
  try {
    await store.dispatch('post/POSTCREATE', postData.value);
    await router.push('/main');
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}

.btn {
  color: white;
}
</style>
