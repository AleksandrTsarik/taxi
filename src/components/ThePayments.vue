<template>
  <div class="payments">
    <div class="payments__container">
      <div class="payments__inner">
        <h2 class="title payments__title">Выплаты по договору ОСГОП такси</h2>
        <div class="payments__subtitle">
          Компенсации по договору ОСГОП регулируются Федеральным законом
          № 67-ФЗ:
        </div>
        <div class="payments__list">
          <div class="payments__item" v-for="(item, i) in cards" :key="i">
            <div class="payments__price">{{ item.price }}</div>
            <div class="payments__description">
              <div class="payments__name">{{ item.name }}</div>
              <div v-if="item.text" class="payments__text">{{ item.text }}</div>
            </div>
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
          price: "до 2 025 000 ₽",
          name: "Вред жизни пассажира",
        },
        {
          price: "до 2 000 000 ₽",
          name: "Вред здоровью пассажира",
          text: "в зависимости от тяжести травм.",
        },
        {
          price: "до 23 000 ₽",
          name: "Вред имуществу пассажира",
          text: "с учётом стоимости повреждений.",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.payments {
  &__inner {
  }
  &__title {
  }
  &__subtitle {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 32px;
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
    }
  }
  &__item {
    background-color: var(--light);
    border-radius: var(--radius_small);
    padding: 24px;
    @media (max-width: 575px) {
      padding: 16px;
    }
  }
  &__price {
    color: rgb(var(--primary));
    font-size: 28px;
    line-height: 110%;
    font-weight: 500;
    margin-bottom: 16px;
    @media (max-width: 767px) {
      font-size: 24px;
    }
    @media (max-width: 575px) {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
  &__name {
    font-size: 20px;
    font-weight: 500;
    line-height: 110%;
    margin-bottom: 16px;
    @media (max-width: 767px) {
      font-size: 18px;
    }
    @media (max-width: 575px) {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
  &__text {
    font-size: 14px;
    font-weight: 400;
    color: rgba(var(--color_text), 0.5);
  }
}
</style>
