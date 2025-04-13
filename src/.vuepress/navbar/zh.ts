import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    link: "/",
    // icon: "home"
  },
  // {
  //   text: "博文",
  //   // icon: "creative",
  //   link: "/posts/",
  // },
  {
    text: "文章",
    prefix: "posts/",
    link: "posts/",
  },
  {
    text: "公交",
    prefix: "青岛公交/",
    link: "青岛公交/",
  },
  {
    text: "杂项",
    prefix: "other/",
    link: "other/",
  },
  {
    text: "关于",
    link: "intro"
  }
  // "/article/",
  // {
  //   "text": "标签",
  //   "icon": "tag",
  //   "link": "/tag/"
  // },
  // {
  //   "text": "分类",
  //   "icon": "categoryselected",
  //   "link": "/category/"
  // },
  // {
  //   text: "博文",
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "苹果",
  //       icon: "pen-to-square",
  //       prefix: "apple/",
  //       children: [
  //         { text: "苹果1", icon: "pen-to-square", link: "1" },
  //         { text: "苹果2", icon: "pen-to-square", link: "2" },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     {
  //       text: "香蕉",
  //       icon: "pen-to-square",
  //       prefix: "banana/",
  //       children: [
  //         {
  //           text: "香蕉 1",
  //           icon: "pen-to-square",
  //           link: "1",
  //         },
  //         {
  //           text: "香蕉 2",
  //           icon: "pen-to-square",
  //           link: "2",
  //         },
  //         "3",
  //         "4",
  //       ],
  //     },
  //     { text: "樱桃", icon: "pen-to-square", link: "cherry" },
  //     { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
  //     "tomato",
  //     "strawberry",
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
