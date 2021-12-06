<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2 @click="$store.commit('add')">{{ $store.state.counter }}</h2>
    <h2 @click="$store.dispatch('addAsync')">{{ $store.state.counter }}</h2>
    <h2>{{ $store.getters.getState }}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
h2 {
  cursor: pointer;
}
</style>
