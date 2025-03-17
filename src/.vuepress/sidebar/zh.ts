import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    // {
    //   text: "Vuepress",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "文章",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },
    {
      text: "公交",
      prefix: "青岛公交/",
      link: "青岛公交/",
      children: "structure",
    },
    {
      text: "杂项",
      prefix: "other/",
      link: "other/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
