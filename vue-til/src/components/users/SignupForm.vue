<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
      <p class="log"></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.color-red {
  color: red;
}
</style>
