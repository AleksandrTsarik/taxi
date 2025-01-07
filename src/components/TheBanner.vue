<template>
  <div class="banner">
    <div class="banner__container">
      <div class="banner__inner">
        <div class="banner__block">
          <h1 class="banner__title">
            <span>ОСГОП такси</span>&nbsp;— защита пассажиров и бизнеса
          </h1>
          <div class="banner__subtitle">
            Оформите обязательное страхование гражданской ответственности
            перевозчика онлайн за&nbsp;несколько минут.
          </div>
          <div class="banner__more">
            <a href="#" class="btn btn-dark">Оформить онлайн</a>
          </div>
          <div class="banner-card">
            <div class="banner-card__item" v-for="(item, i) in cards" :key="i">
              <div>
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.45697 10.4745C4.25452 10.4746 4.05405 10.4355 3.86704 10.3594C3.68002 10.2833 3.51013 10.1717 3.3671 10.0311L0 6.72768L1.28484 5.46706L4.45697 8.58088L12.7152 0.474487L14 1.73511L5.54684 10.0311C5.40381 10.1717 5.23392 10.2833 5.0469 10.3594C4.85988 10.4355 4.65941 10.4746 4.45697 10.4745Z"
                    fill="#7D51FE"
                  />
                </svg>
                <p v-html="item"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="banner__block">
          <img src="../assets/img/car.webp" alt="car" />
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
        "Соответствует требованиям ФЗ №&nbsp;67-ФЗ.",
        "Подходит для самозанятых, ИП&nbsp;и&nbsp;юр лиц.",
        "Действителен 1&nbsp;год, выплаты до&nbsp;2 025 000 ₽",
      ],
    };
  },
};
</script>
<style lang="scss">
.banner {
  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
    }
  }
  &__more {
    margin-bottom: 40px;
  }
  &__block {
    border-radius: var(--radius);
    overflow: hidden;
    background-color: var(--light);
    &:first-child {
      padding: 30px;
      display: flex;
      flex-direction: column;
      @media (max-width: 575px) {
        padding: 16px;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    font-size: 52px;
    line-height: 1;
    font-weight: 500;
    margin-bottom: 24px;
    max-width: 80%;
    @media (max-width: 767px) {
      font-size: 48px;
    }
    @media (max-width: 575px) {
      font-size: 32px;
      margin-bottom: 16px;
      max-width: 100%;
    }
    span {
      color: rgb(var(--primary));
    }
  }
  &__subtitle {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 40px;
    max-width: 70%;
    @media (max-width: 575px) {
      max-width: 100%;
      font-size: 14px;
      margin-bottom: 24px;
    }
  }
  &__more {
    @media (max-width: 575px) {
      margin-bottom: 24px;
    }
    a {
      @media (max-width: 575px) {
        width: 100%;
        text-align: center;
      }
    }
  }
}
.banner-card {
  display: flex;
  flex-wrap: wrap;
  margin: auto -16px 0;
  @media (max-width: 575px) {
    margin: auto 0 0;
  }
  &__item {
    padding: 8px;
    flex: 1 0 33.333%;
    //max-width: 33.333%;
    @media (max-width: 575px) {
      flex: 1 0 100%;
      padding: 5px 0;
    }
    div {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      background-color: rgba(var(--primary), 0.1);
      border-radius: var(--radius_small);
      padding: 16px;
      height: 100%;
      font-size: 14px;
      svg {
        flex: 0 0 16px;
        height: 16px;
      }
    }
  }
}
</style>
