<template>
  <header class="header">
    <div class="haeder__container">
      <div class="header__inner">
        <div class="header-top">
          <div class="header-top__item">
            <a href="/" class="header__logo">
              <img src="../assets/img/logo.svg" alt="logo" />
            </a>
          </div>
          <div
            class="header-top__item header-top__item--mobile"
            v-click-outside="hide"
          >
            <div
              class="header-top__burger"
              @click="menuOpen"
              :class="{ 'is-open': isOpenMenu }"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="header-top__drop" :class="{ 'is-open': isOpenMenu }">
              <nav class="header-mobile__nav header-nav">
                <ul>
                  <li v-for="(item, i) in menu" :key="i">
                    <a :href="item.url">
                      <span v-if="item.ico" v-html="item.ico"></span>
                      {{ item.name }}</a
                    >
                  </li>
                </ul>
              </nav>
              <div class="header-mobile__contacts header-contacts">
                <a href="mailto:asda@asd.ru">info@codeseven.ru</a>
                <a href="tel:+79090058855">+7 (909) 005-88-55</a>
              </div>
              <div class="header-mobile__more header-more">
                <a href="#">О сервисе</a>
                <a href="#" class="btn btn-light">Написать нам</a>
              </div>
            </div>
          </div>
          <div class="header-top__item">
            <div class="header-top__contacts header-contacts">
              <a href="mailto:asda@asd.ru">info@codeseven.ru</a>
              <a href="tel:+79090058855">+7 (909) 005-88-55</a>
            </div>
          </div>
        </div>
        <div class="header-bot">
          <nav class="header-bot__nav header-nav">
            <ul>
              <li v-for="(item, i) in menu" :key="i">
                <a :href="item.url">
                  <span v-if="item.ico" v-html="item.ico"></span>
                  {{ item.name }}</a
                >
              </li>
            </ul>
          </nav>
          <div class="header-bot__more header-more">
            <a href="#">О сервисе</a>
            <a href="#" class="btn btn-light">Написать нам</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
// import TheButton from "./UI/TheButton.vue";

export default {
  //   component: {
  //     TheButton,
  //   },
  data() {
    return {
      isOpenMenu: false,
      menu: [
        {
          name: "Что такое ОСГОП такси?",
          url: "#",
        },
        {
          name: "Какие выплаты?",
          url: "#",
        },
        {
          name: "Как оформить?",
          url: "#",
        },
        {
          name: "Cтраховой случай",
          url: "#",
          ico: '<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.9997 15.8072C4.69147 15.8072 2 13.0682 2 9.70166C2 7.65142 2.90295 6.36866 4.25889 5.07368L5.72761 3.67002L5.25244 5.66225C5.08745 6.35583 5.04425 8.47445 5.9196 9.60702C6.28619 10.0814 6.77036 10.3122 7.39973 10.3122C8.0639 10.3122 8.59127 9.77248 8.59967 9.08317C8.60807 8.40118 8.32488 7.83642 8.0249 7.2393C7.71771 6.62753 7.39973 5.99561 7.39973 5.22753C7.39973 3.57233 8.24689 2.0722 8.28289 2.00932L8.77966 1.14111L9.30824 1.99039C9.81761 2.80792 10.5046 3.56989 11.1699 4.30682C12.5613 5.84785 14 7.44262 14 9.70227C14 13.0688 11.3085 15.8078 8.0003 15.8078L7.9997 15.8072ZM3.19994 9.70166C3.19994 12.3948 5.35323 14.5861 7.9997 14.5861C10.6462 14.5861 12.7995 12.3948 12.7995 9.70166C12.7995 7.91762 11.5785 6.56403 10.2856 5.13229C9.82361 4.62004 9.35083 4.09679 8.92005 3.53814C8.75446 4.01009 8.59967 4.61454 8.59967 5.22875C8.59967 5.70254 8.82826 6.1574 9.09285 6.68492C9.43003 7.35531 9.81161 8.11483 9.79961 9.09965C9.78341 10.4416 8.70647 11.5339 7.39973 11.5339C6.40678 11.5339 5.56862 11.1285 4.97585 10.3623C4.28829 9.4727 4.0345 8.23938 3.9775 7.19595C3.47533 7.90847 3.19994 8.67654 3.19994 9.70166Z" fill="#FE4F18"/></svg>',
        },
      ],
    };
  },
  methods: {
    menuOpen() {
      if (!this.isOpenMenu) document.body.classList.add("menu-open");
      else document.body.classList.remove("menu-open");
      this.isOpenMenu = !this.isOpenMenu;
    },
    hide() {
      this.isOpenMenu = false;
      document.body.classList.remove("menu-open");
    },
  },
};
</script>
<style lang="scss">
.header {
  &__logo {
    img {
      @media(max-width: 575px) {
      max-width: 70%;
    }
    }
    
  }
}
.header-top {
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  &__item {
    &:last-child {
      @media (max-width: 1023px) {
        display: none;
      }
    }
    &--mobile {
      display: none;
      position: relative;
      @media (max-width: 1023px) {
        display: block;
      }
    }
  }
  &__drop {
    position: absolute;
    right: 0;
    top: 100%;
    box-shadow: 0 0 10px rgba(var(--primary), 0.5);
    padding: 25px;
    width: 300px;
    transition: 0.3s;
    transform: translateY(-100px);
    opacity: 0;
    height: 0;
    pointer-events: none;
    padding: 0;
    z-index: 100;
    background-color: var(--light);
    border-radius: var(--radius_small);
    // @media (max-width: 767px) {
    //   left: 0;
    //   right: 0;
    //   top: 100%;
    //   height: 100vh;
    //   position: fixed;
    // }
    &.is-open {
      opacity: 1;
      padding: 25px;
      height: auto;
      transform: translateY(0);
      pointer-events: all;
    }
  }
  &__burger {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 150;
    cursor: pointer;
    span {
      height: 2px;
      width: 100%;
      display: block;
      background-color: rgb(var(--primary));
      transition: 0.3s;
      position: absolute;
      left: 0;
      right: 0;
      &:nth-child(1) {
        top: 3px;
      }
      &:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
      }
      &:nth-child(3) {
        bottom: 3px;
      }
    }
    &.is-open {
      overflow: hidden;
      span {
        position: absolute;
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(1) {
          transform: translateY(-50%) rotate(135deg);
          //transform: translateY(-50%) rotate(45deg);
          top: 50%;
        }
        &:nth-child(3) {
          transform: translateY(-50%) rotate(-135deg);
          //transform: translateY(-50%) rotate(-45deg);
          top: 50%;
        }
      }
    }
  }
  &__contacts {
  }
}
.header-bot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 1023px) {
    display: none;
  }
  &__nav {
  }
  &__more {
  }
}
.header-nav {
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 10px;
    @media (max-width: 1023px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  a {
    color: rgba(var(--gray), 0.5);
    transition: 0.3s;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  svg {
    margin-bottom: -1px;
  }
  svg path {
    fill: rgba(var(--gray), 0.5);
    transition: 0.3s;
  }
  li {
    font-size: 14px;
    letter-spacing: -2%;
    font-weight: 400;
    &:hover {
      @media (min-width: 1023px) {
        a {
          color: var(--orange);
        }
        svg path {
          fill: var(--orange);
        }
      }
    }
  }
}
.header-contacts {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -2%;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  a {
    color: rgb(var(--primary));
    display: block;
  }
}
.header-more {
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }
  a {
    @media (max-width: 1023px) {
      width: 100%;
    }
    &:first-child {
      font-size: 16px;
      color: rgba(var(--color_text), 0.5);
      transition: 0.3s;
      &:hover {
        @media (min-width: 1023px) {
          color: rgba(var(--color_text), 1);
        }
      }
    }
    &:last-child {
      @media (max-width: 1023px) {
        text-align: center;
      }
    }
  }
}
</style>
