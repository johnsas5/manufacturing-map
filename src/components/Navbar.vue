<template>
  <nav id="navbar">
    <div class="menu-item"><router-link to="/">Home</router-link></div>
    <div class="menu-item" @click="dropDownOpen()" >
      <router-link to="/login">User</router-link>
      <svg viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
      </svg>
      <div class="subMenu" v-if="isOpen">
        <span @click="loginClick">{{loginText}}</span>
        <router-link v-if="auth != null" to="/settings">Settings</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getAuth, Auth } from '@firebase/auth';

@Component
export default class Navbar extends Vue{
  isOpen = false;
  auth: Auth | null = null;
  loginText = "Login";

  mounted() {
    this.auth = getAuth();
  }

  dropDownOpen() {
    this.updateAuth()
    this.isOpen = !this.isOpen;
  }

  loginClick() {
    this.auth == null ? this.$router.push({path: "/login"}) : this.$router.push({path: "/"});
    this.updateAuth();
  }

  updateAuth() {
    this.auth = getAuth();
    this.auth == null ? this.loginText = "Login" : this.loginText = "Logout";
  }
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
  background-color: hsl(200, 93%, 75%);
  border-bottom-color: hsl(200, 93%, 60%);
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>