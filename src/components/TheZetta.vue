<template>
  <div class="zetta">
    <div class="zetta__container">
      <div class="zetta__inner">
        <h2 class="title zetta__title">Страховой случай. Что делать?</h2>
        <div class="zetta__text">
          При наступлении страхового случай ознакомьтесь с действиями на стороне Страхователя:
        </div>
        <div class="zetta__links">
          <div>
            <a href="#" target="_blank" class="btn btn-dark"
              >ДТП
              <svg
                width="20"
                height="13"
                viewBox="0 0 20 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2704 5.0518L15.4487 0.949219L14.2703 2.21417L17.8221 6.02779L0 6.05463V7.84381L17.8721 7.81697L14.2695 11.6843L15.4478 12.9492L19.2704 8.84664C19.7377 8.34255 20 7.66035 20 6.94922C20 6.23809 19.7377 5.55589 19.2704 5.0518Z"
                  fill="#EEEEEE"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="#" target="_blank" class="btn btn-dark">
              Несчастный случай
              <svg
                width="20"
                height="13"
                viewBox="0 0 20 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2704 5.0518L15.4487 0.949219L14.2703 2.21417L17.8221 6.02779L0 6.05463V7.84381L17.8721 7.81697L14.2695 11.6843L15.4478 12.9492L19.2704 8.84664C19.7377 8.34255 20 7.66035 20 6.94922C20 6.23809 19.7377 5.55589 19.2704 5.0518Z"
                  fill="#EEEEEE"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.zetta {
  &__inner {
    background-color: rgba(var(--primary), 0.1);
    border-radius: var(--radius);
    overflow: hidden;
    position: relative;
    width: 100%;
    padding: 32px;
    @media (max-width: 575px) {
      padding: 24px 16px 90px 16px;
    }
    &:after {
      content: '';
      background-image: url('../assets/img/zetta.webp');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      display: block;
      position: absolute;
      right: 20px;
      bottom: 20px;
      width: 315px;
      height: 115px;
      @media (max-width: 767px) {
        height: 50px;
        width: 135px;
      }
    }
  }
  &__title {
    color: rgba(var(--primary));
  }
  &__text {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 32px;
    @media (max-width: 575px) {
      margin-bottom: 16px;
    }
  }
  &__links {
    display: flex;
    gap: 16px;
    flex-direction: column;
    @media (max-width: 575px) {
      gap: 8px;
    }
    a {
      @media (max-width: 575px) {
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
