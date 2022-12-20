<template>
  <div id="app">
    <nav>
      <router-link to="/">go to index</router-link>
      <router-link to="/about">about page</router-link>
      <router-link to="/customers/bob">customer bob</router-link>
    </nav>

    <br />
    <hr />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  flex-direction: column;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
