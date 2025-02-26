<template>
<div class="card">
  <!-- Верхняя часть -->
  <div class="card__top">
    <!-- Изображение-ссылка товара -->
    <a href="#" class="card__image">
      <img
        src="https://images.genius.com/4e4fa6d7b51b4b3c48dde9b1ee1ec229.1000x1000x1.png"
        alt="Apple IPhone 14 PRO Max Gold"
      />
    </a>
  </div>
  <div class="card__bottom">
    <div class="card__price">
 1000 руб
    </div>
      <p class="card__title">{{ donate }}</p>
    <!-- Кнопка добавить в корзину -->
    <button class="card__add">В корзину</button>
  </div>
</div>
</template>

<script setup>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 225px;
  min-height: 350px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* Размещаем элементы в колонку */
  border-radius: 4px;
  transition: 0.2s;
  position: relative;
}

/* При наведении на карточку - меняем цвет тени */
.card:hover {
  box-shadow: 4px 8px 16px rgba(255, 102, 51, 0.2);
}

.card__top {
  flex: 0 0 220px; /* Задаем высоту 220px, запрещаем расширение и сужение по высоте */
  position: relative;
  overflow: hidden; /* Скрываем, что выходит за пределы */
}

/* Контейнер для картинки */
.card__image {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card__image > img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Встраиваем картинку в контейнер card__image */
  transition: 0.2s;
}

/* При наведении - увеличиваем картинку */
.card__image:hover > img {
  transform: scale(1.1);
}

.card__bottom {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto; /* Занимаем всю оставшуюся высоту карточки */
  padding: 10px;
}

.card__price {
  display: flex;
  margin-bottom: 10px;
  font-size: larger;
}

.card__title {
  display: block;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: larger;
  line-height: 150%;
  color: #414141;
}

.card__add {
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: 17px;
  color: #70c05b;
  padding: 10px;
  text-align: center;
  border: 1px solid #70c05b;
  border-radius: 4px;
  cursor: pointer; /* Меняем курсор при наведении */
  transition: 0.2s;
  margin-top: auto; /* Прижимаем кнопку к низу карточки */
}

.card__add:hover {
  border: 1px solid #ff6633;
  background-color: #ff6633;
  color: #fff;
}
</style>
