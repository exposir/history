export default {
  themeConfig: {
    siteTitle: "史海泛舟",
    nav: [
      { text: "Guide", link: "/guide" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "内参治国的那些事", link: "/内参治国的那些事/index.md" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
  },
};
