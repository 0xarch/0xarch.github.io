import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "博客",
      description: "0xarch 的博客",
    },
    "/en/": {
      lang: "en-US",
      title: "A blog",
      description: "0xarch's blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
