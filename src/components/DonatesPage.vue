<template>
    <div class="cards">
        <DonateCard class="DCard" v-for="(donate, index) in donates" :key="donate.id" :index="index" :donate="donate.donateName" :price="donate.price"></DonateCard>
    </div>
</template>

<script setup>
import DonateCard from './DonateCard.vue';
import axios from 'axios';
import { ref } from 'vue';
let donates = ref([]);
const getDonate = async () => {
    const response = await axios({
      url: 'http://localhost:3000/api/records',
      method: 'get',
    })
    donates.value = response.data
    console.log(response.data)
}
getDonate()
</script>

<style scoped>
.cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-right: 22vw;
    padding-left: 22vw;
}
.DCard{
  width: 15vw;
  height: 15vw;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; 
  border-radius: 16px;
  transition: 0.2s;
  position: relative;
  margin: 1vw;
  background-image: url('https://avatars.mds.yandex.net/i?id=862a63add2747d9fe99ab27707e3c300_l-10894796-images-thumbs&n=13');
  background-size: 100%;
}
</style>