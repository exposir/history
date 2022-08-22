export default {
  themeConfig: {
    siteTitle: "史海泛舟",
    nav: [
      { text: "人民日报", link: "/paper/" },
      { text: "吃瓜", link: "/周末快乐/" },
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
      "/paper/": [
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
              text: "1946-05-15",
              link: "rmrb/1946年05月/1946-05-15.md",
            },
          ],
        },
        {
          text: "1940",
          items: [
            { text: "1946年", link: "/paper/1946/" },
            { text: "1947年", link: "/周末快乐/" },
            {
              text: "1948年",
              link: "《东宫变》前传之春华传/",
            },
            {
              text: "1949年",
              link: "kkndme.md",
            },
            {
              text: "1950年",
              link: "rmrb/1946年05月/1946-05-15.md",
            },
          ],
        },
      ],
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
    },
  },
};
