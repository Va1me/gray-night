<template>
<div class="card">
  <div class="card__bottom">
    <button class="card__add"><p class="donate">{{ donate }}, {{ price }}</p></button>
  </div>
</div>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps(["donate", "price"])
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* При наведении на карточку - меняем цвет тени */
.card:hover {
  box-shadow: 4px 8px 16px rgba(255, 102, 51, 0.2);
}
.card__bottom {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto; /* Занимаем всю оставшуюся высоту карточки */
  object-fit: cover;
}

.card__add {
  display: inline;
  width: 100%;
  height: 20%;
  font-size: 17px;
  color: #70c05b;
  text-align: center;
  border: 0;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  cursor: pointer; /* Меняем курсор при наведении */
  transition: 0.2s;
  margin-top: auto; /* Прижимаем кнопку к низу карточки */
  background-color: rgba(0, 255, 255, 0.089);
}

.card__add:hover {
  background-color: #ff663333;
  color: #fff;
}
</style>
