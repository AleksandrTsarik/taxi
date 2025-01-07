<template>
  <div class="offer">
    <div class="offer__container">
      <div class="offer__inner">
        <h2 class="offer__title title">Преимущества страхования от Code7</h2>
        <div class="offer__list">
          <div
            class="offer__item"
            v-for="(item, i) in cards"
            :key="i"
            :class="{ 'offer__item--bg': item.bg }"
          >
            <div class="offer__title">{{ item.title }}</div>
            <div class="offer__text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Простота оформления",
          text: "Полностью онлайн — от заполнения заявки до получения полиса на email.",
        },
        {
          title: "Соотвествие ФЗ РФ",
          text: "Полис соответствует требованиям Федерального закона № 67-ФЗ.",
        },
        {
          title: "Минимум усилий",
          text: "Отсутствие необходимости в предъявлении документов для оформления онлайн.",
        },
        {
          title: "Надёжная поддержка",
          text: "Наша команда всегда на связи, чтобы помочь с любыми вопросами.",
          bg: true,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.offer {
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    @media (max-width: 1023px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 575px) {
      grid-template-columns: 1fr;
    }
  }
  &__item {
    background-color: var(--light);
    border-radius: var(--radius_small);
    overflow: hidden;
    padding: 24px;
    display: flex;
    flex-direction: column;
    &--bg {
      background-color: rgba(var(--primary), 0.1);
      .offer__title {
        color: rgb(var(--primary));
      }
    }
  }
  &__title {
    font-size: 28px;
    font-weight: 500;
    line-height: 110%;
    margin-bottom: 24px;
  }
  &__text {
    font-size: 16px;
    line-height: 110%;
    font-weight: 400;
    margin-top: auto;
  }
}
</style>
