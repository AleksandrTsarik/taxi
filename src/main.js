import "./assets/style/main.scss";

import { createApp } from "vue";
import App from "@/App.vue";

//import components from '@/components/UI'
//import VueMask from '@devindex/vue-mask';

const app = createApp(App);

// components.forEach(component => {
// 	app.component(component.name, component)
// })

app

  .directive("click-outside", {
    mounted(element, { value }) {
      element.clickOutside = function (event) {
        if (!(element === event.target || element.contains(event.target))) {
          value(event);
        }
      };
      document.body.addEventListener("click", element.clickOutside);
    },
    unmounted(element) {
      document.body.removeEventListener("click", element.clickOutside);
    },
  })
  //.use(VueMask)

  .mount("#app");
