<template>
  <div class="refund">
    <div class="refund__container">
      <div class="refund__inner">
        <div class="refund__block">
          <h2 class="title refund__title">Как оформить?</h2>
          <div class="refund-list">
            <ul>
              <li class="refund-list__item" v-for="(item, i) in list" :key="i">
                <div class="refund-list__title">{{ item.title }}</div>
                <div class="refund-list__text" v-html="item.text"></div>
              </li>
            </ul>
          </div>
        </div>
        <div class="refund__block">
          <img src="../assets/img/peolpe.webp" alt="..." loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          title: 'Проверка разрешения на перевозку',
          text: 'Убедитесь, что у вас есть действующее разрешение. Проверьте его на сайте <a href="#">ФГИС «Такси».</a>',
        },
        {
          title: 'Заполнение заявления',
          text: 'Укажите данные перевозчика, такси и пассажиров при офрмлении заявления на сайте.',
        },
        {
          title: 'Получение полиса',
          text: 'После подтверждения и оплаты полис будет отправлен на ваш email.',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.refund {
  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
    }
  }
  &__block {
    border-radius: var(--radius);
    background-color: var(--light);
    overflow: hidden;
    &:first-child {
      padding: 32px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
  }
}
.refund-list {
  ul {
    list-style-type: none;
    counter-reset: num;
  }
  &__item {
    position: relative;
    margin: 0 0 20px;
    padding: 0 0 0 65px;
    //z-index: 1;
    &:before {
      content: counter(num);
      counter-increment: num;
      font-size: 20px;
      color: rgb(var(--primary));
      background-color: rgba(var(--primary), 0.1);
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      @media (max-width: 767px) {
        font-size: 18px;
      }
      @media (max-width: 575px) {
        font-size: 16px;
      }
    }
    &:after {
      content: '';
      position: absolute;
      display: block;
      border: dashed 1px rgb(var(--primary));
      height: calc(100% - 25px);
      left: 22px;
      top: 45px;
      z-index: 0;
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  }
  &__title {
    font-size: 20px;
    font-weight: 500;
    line-height: 110%;
    margin-bottom: 15px;
    @media (max-width: 767px) {
      font-size: 18px;
    }
    @media (max-width: 575px) {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
  &__text {
    font-size: 16px;
    font-weight: 400;
    @media (max-width: 575px) {
      font-size: 14px;
    }
    a {
      color: rgb(var(--primary));
    }
  }
}
</style>
