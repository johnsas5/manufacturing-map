<template>
  <div id="app">
    <nav-bar-custom />
    <transition name="shrink-explode">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { component } from 'vue/types/umd';
import NavBarCustom from "./components/NavBarCustom.vue";

export default Vue.extend({
  components: { NavBarCustom }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

button {
  background-color: hsl(200, 100%, 80%);
  font-size: 18px;
  padding: 15px;
  margin: 20px;
  border-radius: 5px;
}

button:hover {
  cursor: pointer;
}

.modal {
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: 5px;
  border-radius: 25px;
  border-color: hsl(200, 100%, 40%);
  background-color: #fff;
  padding: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
input {
  margin: 0.25em;
  align-self: stretch;
  font-size: 18px;
}
</style>
