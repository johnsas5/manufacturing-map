<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <transition name="shrink-explode">
      <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  background-color: hsl(200, 100%, 80%);
  font-size: 22px;
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

</style>
