<template>
  <li>
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-contents">{{ postItem.contents }}</div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deletePage"></i>
    </div>
  </li>
</template>

<script setup>
import { fetchPostDelete } from '@/api/post';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
  postItem: {},
});
const emit = defineEmits(['refesh']);
function routeEditPage() {
  const id = props.postItem._id;
  router.push(`/edit/${id}`);
}
async function deletePage() {
  if (confirm('You want to delete is?')) {
    await fetchPostDelete(props.postItem._id);
    emit('refesh');
  }
}
</script>

<style></style>
