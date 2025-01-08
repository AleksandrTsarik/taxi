<template>
  <div class="service">
    <div class="service__container">
      <div class="service__inner">
        <div class="service__block">
          <img src="../assets/img/ctrl.webp" alt="..." loading="lazy" />
        </div>
        <div class="service__block">
          <div class="service__footnote">О сервисе</div>
          <div class="service__title">
            «ОСГОП такси» — дочерний продукт компании Code7, созданный для перевозчиков и защиты
            их бизнеса.
          </div>
          <div class="service__text">
            Мы объединили наши компетенции в IT и знания рынка страхования, чтобы предложить
            простой, прозрачный и надёжный сервис оформления полиса страхования для перевозчиков.
          </div>
          <div class="service-cards">
            <div class="service-card" v-for="(item, i) in cards" :key="i">
              <div class="service-card__title">{{ item.title }}</div>
              <div class="service-card__text">{{ item.text }}</div>
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
          title: '17 лет опыта',
          text: 'специалистов в IT-сфере.',
        },
        {
          title: '50+ проектов',
          text: 'успешно завершённых в самых разных отраслях.',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.service {
  &__footnote {
    background-color: rgba(var(--primary), 0.1);
    color: rgba(var(--primary), 1);
    font-size: 14px;
    font-weight: 400;
    border-radius: var(--radius);
    margin-bottom: 40px;
    display: inline-block;
    padding: 8px 16px;
  }
  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    @media (max-width: 1023px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
  &__block {
    border-radius: var(--radius);
    overflow: hidden;
    &:first-child {
      margin: 0 auto;
      img {
        max-width: 100%;
      }
    }
    &:last-child {
      background-color: var(--light);
      padding: 32px;
      @media (max-width: 575px) {
        padding: 24px 16px;
      }
    }
  }
  &__title {
    font-size: 28px;
    font-weight: 500;
    line-height: 110%;
    margin-bottom: 40px;
    @media (max-width: 767px) {
      font-size: 24px;
    }
    @media (max-width: 575px) {
      font-size: 20px;
      margin-bottom: 24px;
    }
  }
  &__text {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 40px;
    @media (max-width: 575px) {
      font-size: 14px;
      margin-bottom: 24px;
    }
  }
}
.service-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 575px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
.service-card {
  background-color: rgba(var(--primary), 0.1);
  padding: 16px;
  border-radius: 16px;
  &__title {
    color: rgba(var(--primary), 1);
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      font-size: 18px;
    }
    @media (max-width: 575px) {
      font-size: 16px;
    }
  }
  &__text {
    font-size: 16px;
    font-weight: 400;
    @media (max-width: 575px) {
      font-size: 14px;
    }
  }
}
</style>
