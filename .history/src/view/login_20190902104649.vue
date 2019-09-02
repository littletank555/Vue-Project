<template>
  <div class="container">
    <h2>Esolution</h2>
    <p class="input-item">
      <a-input v-model="login" name="user_name" placeholder="用户名" ref="userNameInput">
        <a-icon slot="prefix" type="user" />
      </a-input>
    </p>
    <p class="input-item">
      <a-input
        v-model="password"
        type="password"
        placeholder="密码"
        ref="userNameInput"
        v-on:keyup.enter="userLogin"
      >
        <a-icon slot="prefix" type="lock" />
      </a-input>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.container {
  height: 45%;
  width: 30%;
  margin: auto;
  margin-top: 25%;
  .input-item {
    height: 40px;
  }
}
</style>