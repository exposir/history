export default {
  themeConfig: {
    siteTitle: "史海泛舟",
    nav: [
      { text: "吃瓜", link: "/周末快乐/" },
      { text: "人民日报", link: "/rmrb/" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],
    sidebar: {
      "/周末快乐/": [
        {
          text: "Guide",
          items: [
            { text: "内参治国的那些事", link: "/内参治国的那些事/" },
            { text: "周末快乐", link: "/周末快乐/" },
            {
              text: "《东宫变》前传之春华传",
              link: "《东宫变》前传之春华传/",
            },
            {
              text: "kkndme",
              link: "kkndme.md",
            },
          ],
        },
      ],
      "/rmrb/": [
        {
          text: "Guide",
          items: [
            { text: "内参治国的那些事", link: "/内参治国的那些事/" },
            { text: "周末快乐", link: "/周末快乐/" },
            {
              text: "《东宫变》前传之春华传",
              link: "《东宫变》前传之春华传/",
            },
            {
              text: "kkndme",
              link: "kkndme.md",
            },
            {
              text: "1946-05-15_艾森豪威尔_过京沪即将赴日",
              link: "rmrb/1946年05月/1946-05-15_艾森豪威尔_过京沪即将赴日.md",
            },
          ],
        },
      ],
    },
  },
};
