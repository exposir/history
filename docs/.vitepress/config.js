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
            { text: "内参治国的那些事", link: "/内参治国的那些事/index.md" },
            { text: "周末快乐", link: "/周末快乐/index.md" },
            {
              text: "《东宫变》前传之春华传",
              link: "《东宫变》前传之春华传/index.md",
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
            { text: "内参治国的那些事", link: "/内参治国的那些事/index.md" },
            { text: "周末快乐", link: "/周末快乐/index.md" },
            {
              text: "《东宫变》前传之春华传",
              link: "《东宫变》前传之春华传/index.md",
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
