<template>
  <nav>
    <RouterLink class="nav" to="/">Главная</RouterLink>
    <RouterLink class="nav" to="/donate">Донат</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup>

</script>

<style>
body{
  background-image: url('https://i.ytimg.com/vi/BVtX6zHTWP0/maxresdefault.jpg');
}
nav{
  padding-top: 20px;
  margin-bottom: 40px;
}
.nav{
  background-color: rgb(27, 21, 49);
  font-size: 70px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-right: 30px;
  color: rgb(197, 188, 188);
  text-decoration: none;
  border-radius: 25px;
  padding: 10px;
}
.nav:hover{
  background-color: rgb(48, 38, 83);
  padding: 15px;
}
</style>
