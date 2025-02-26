<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
// import axios from 'axios';
import { ref } from 'vue';


let donate = ref('');
// const getDonate = async () => {
//     const response = await axios({
//       url: 'http://localhost:3000/api/records',
//       method: 'get',
//       data: {
//         donate: 'Wither'
//       }
//     })
//     donate.value = response.data
//     console.log(response.data)
// }
donate.value = 'Donat'
// getDonate()
</script>

<style>

</style>
