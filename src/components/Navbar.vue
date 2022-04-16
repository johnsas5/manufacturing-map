<template>
  <nav id="navbar">
    <div class="menu-item"><router-link to="/">Home</router-link></div>
    <div class="menu-item"><router-link to="/chat">Chat</router-link></div>
    <div class="menu-item"><router-link to="/login">Login</router-link></div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Navbar extends Vue{

}
</script>

<style>
nav {
  width: 100vw;
  background-color: hsl(199, 93%, 90%);
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item {
  color: #FFF;
  padding: 25px 40px;
  position: relative;
  text-align: center;
  border-bottom: 5px solid transparent;
  display: flex;
  transition: 0.4s;
}
nav .menu-item.active,
nav .menu-item:hover {
  background-color: hsl(199, 93%, 75%);
  border-bottom-color: hsl(199, 93%, 60%);
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>