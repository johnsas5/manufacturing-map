
<template>
    <div class="menu-item" @click="isOpen = !isOpen" >
        <a href ='#'><router-link to="LoginView">Login<router-link>
            User
        </a>
        <svg viewBox="0 0 1030 638" width="10">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
        </svg>
        <transition name="fade" apear>
         <div class="sub-menu" v-if="isOpen">
            <div class="menu-item">
              <router-link to="/settings">Settings</router-link>
            </div>
        </div>
        </transition>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from "vue-property-decorator";

@Component
export default class LoginNav extends Vue{

}
</script>

<style>

</style>