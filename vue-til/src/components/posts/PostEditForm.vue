<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="postEditSubmit">
        <div>
          <label for="title">Title:</label>
          <input id="title" v-model="postData.title" type="text" />
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
        <button type="submit" class="btn">Edit</button>
      </form>
      <p class="log"></p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const store = useStore();
const route = useRoute();
const postData = ref({
  title: '',
  contents: '',
  _id: route.params.id,
});

const id = route.params.id;

async function postEditSubmit() {
  await store.dispatch('post/POSTEDIT', postData.value);
  router.push('/main');
}
onMounted(async () => {
  const res = await store.dispatch('post/POSTLIST', id);
  postData.value.title = res.title;
  postData.value.contents = res.contents;
});
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}

.btn {
  color: white;
}
</style>
