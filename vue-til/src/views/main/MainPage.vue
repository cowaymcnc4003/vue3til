<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <template v-if="loading">
        <loading-spinner></loading-spinner>
      </template>
      <template v-else>
        <ul>
          <post-list-form
            v-for="postItem in postItems"
            :postItem="postItem"
            :key="postItem._id"
            @refesh="fetchNotes"
          ></post-list-form>
        </ul>
      </template>
    </div>
    <router-link :to="`/create`" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import LoadingSpinner from '../../components/common/LoadingSpinner.vue';
import PostListForm from '../../components/posts/PostListForm.vue';
const store = useStore();
const loading = ref(false);
const postItems = ref([]);
async function fetchNotes() {
  try {
    loading.value = true;
    const res = await store.dispatch('post/POSTLISTS');
    loading.value = false;
    postItems.value = res.posts;
    console.log(postItems.value);
  } catch (error) {
    console.log(error);
  }
}
fetchNotes();
</script>

<style></style>
