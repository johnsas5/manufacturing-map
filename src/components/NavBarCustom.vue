<template>
  <nav id="navbar">
    <div class="menu-item menu-item-style" @click="homeClick">
      <a href="#">Home</a>
    </div>
    <div class="menu-item menu-item-style" @click="downtimeClick">
      <a href="#">Downtime History</a>
      </div>
    <div class="menu-item-style subMenu" @click="dropDownToggle()" >
      <a href="#">User</a>
      <svg class="subMenuGraphic" viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#000"></path>
      </svg>
      <div class="subMenu-content" v-if="isOpen">
        <div class="menu-item-style" @click="loginClick()">
          <a href="#" >{{loginText}}</a>
        </div>
        <div v-if="this.currentUser != null" class="menu-item-style" @click="settingsClick()">
          <a href="#" >Settings</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { getAuth, Auth, signOut, onAuthStateChanged, User } from '@firebase/auth';

@Component
export default class NavBarCustom extends Vue{
  isOpen = false;
  currentUser: User | null = null;
  loginText = "Login";

  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user: User|null) => {
      if (this.currentUser == null  && user != null){
        this.currentUser = user;
        this.loginText = "Logout";
        this.isOpen = false;
      }
      else if (this.currentUser != null && user == null) {
        this.currentUser = null;
        this.loginText = "Login";
        this.isOpen = false;
      }
    })
  }

  dropDownToggle() {
    this.isOpen = !this.isOpen;
  }

  homeClick() {
    this.isOpen = false;
    this.$router.push({path: "/"});
  }

  downtimeClick() {
    this.isOpen = false;
    this.$router.push({path: "/downtimeEntries"});
  }

  loginClick() {
    this.isOpen = false;
    if (this.currentUser != null) {
       signOut(getAuth());
     }
    this.$router.push({path: "/login"});
  }

  settingsClick() {
    this.isOpen = false;
    this.$router.push({path: "/settings"});
  }
}
</script>

<style>
nav {
  width: 100vw;
  background-color: hsl(200, 93%, 90%);
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .menu-item-style {
  color: black;
  padding: 25px 40px;
  padding-bottom: 15px;
  text-align: center;
  min-width:auto;
  border-bottom: 5px solid transparent;
  transition: 0.4s;
}
nav .menu-item {
  position: relative;
  display: flex;
}
nav .menu-item.active,
nav .menu-item-style.active,
nav .menu-item:hover,
nav .menu-item-style:hover {
  background-color: hsl(200, 93%, 75%);
  border-bottom-color: hsl(200, 93%, 60%);
}
nav .menu-item a {
  color: inherit;
}
nav svg {
  padding-left: 15px;
}

.subMenu .subMenuGraphic {
  border: none;
  outline: none;
  background-color: inherit;
  font-family: inherit;
}
.subMenu {
  float: left;
  overflow: hidden;
}
.subMenu-content {
  display: block;
  position: absolute;
  padding-bottom: 10px;
  transform: translate(-40px, 15px);
  background-color: hsl(200, 93%, 90%);
  z-index: 1;
}
.subMenu-content div {
  float:none;
  color: black;
  padding-top: 30px;
  text-align: center;
  align-content: center;
}
a {
  text-decoration: none;
}
nav div {
  cursor: pointer;
}

</style>
