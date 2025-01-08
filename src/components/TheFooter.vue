<template>
  <header class="footer">
    <div class="footer__container">
      <div class="footer__inner">
        <div class="footer-white">
          <div class="footer-white__logo">
            <a href="/" target="_blank">
              <img src="../assets/img/logo-big.webp" alt="logo" />
            </a>
          </div>

          <div class="footer-white__question">
            <p>У вас остались вопросы?</p>
            <a href="#" target="_blank" class="btn btn-dark">Напишите нам</a>
            <div class="footer-white__feeedback">
              <img src="../assets/img/face.webp" alt="..." />
              <div class="footer-white__feeedback-desc">
                <p>Константин</p>
                <p>CEO Code7</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-strip">
          <a href="#" target="_blank">ООО “КОДСЕВЕН”</a>
          <a href="#" target="_blank">Политика конфиденциальности</a>
          <a href="#" target="_blank">Условия использования</a>
          <div class="footer-strip__links">
            <a href="mailto:info@codeseven.ru">info@codeseven.ru</a>
            <a href="tel:+79090058855">+7 (909) 005-88-55</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss">
.footer {
  margin-top: 64px;
}
.footer-white {
  background-color: var(--light);
  border-radius: var(--radius);
  padding: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 767px) {
    padding: 24px;
  }
  &__logo {
    position: relative;
    @media (max-width: 1023px) {
      width: 100%;
    }
    img {
      @media (max-width: 767px) {
        max-width: 70%;
      }
    }
    &::after {
      content: '';
      background-image: url('../assets/img/cursor.webp');
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
      display: block;
      width: 150px;
      height: 250px;
      position: absolute;
      right: -150px;
      top: -135px;
      z-index: 0;
      @media (max-width: 1023px) {
        right: 0;
      }
      @media (max-width: 575px) {
        right: -20px;
        top: -50px;
        width: 100px;
        height: 100px;
      }
    }
  }
  &__question {
    align-items: center;
    display: grid;
    grid-template-areas: 'a b c';
    grid-template-columns: 1fr;
    gap: 24px;
    position: relative;
    z-index: 1;

    p {
      grid-area: a;
    }
    a {
      grid-area: b;
      @media (max-width: 575px) {
        width: 100%;
        text-align: center;
      }
    }
    @media (max-width: 1023px) {
      justify-content: space-between;
      width: 100%;
    }
    @media (max-width: 767px) {
      grid-template-areas: 'a a' 'b c';
      justify-content: start;
    }
    @media (max-width: 575px) {
      grid-template-areas: 'a' 'b' 'c';
      width: 100%;
    }
  }
  &__feeedback {
    display: flex;
    align-items: center;
    gap: 12px;
    position: relative;
    z-index: 1;
    grid-area: c;
  }
  &__feeedback-desc {
    p {
      font-size: 16px;
      line-height: 1em;
      font-weight: 600;
      &:last-child {
        color: rgba(var(--color_text), 0.5);
        font-weight: 400;
        margin-top: 8px;
      }
    }
  }
}
.footer-strip {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  padding: 25px 0;
  white-space: nowrap;
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
  }
  a {
    font-size: 14px;
    font-weight: 400;
    color: rgba(var(--color_text), 0.5);
    transition: 0.3;
    &:hover {
      @media (min-width: 1023px) {
        color: var(--orange);
      }
    }
  }
  &__links {
    display: flex;
    align-items: center;
    gap: 16px;
    a {
      color: rgb(var(--primary));
    }
  }
}
</style>
