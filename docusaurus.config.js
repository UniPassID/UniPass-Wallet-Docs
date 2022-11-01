// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UniPass Docs",
  tagline: "UniPass Wallet is cool",
  url: "https://docs.wallet.unipass.id",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "unipass", // Usually your GitHub org/user name.
  projectName: "document", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
      fa: {
        direction: "rtl",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, docPath}) => {
            if (locale === 'zh'){
            return `https://github.com/UniPassID/UniPass-Wallet-Docs/tree/main/i18n/zh/docusaurus-plugin-content-docs/current/${docPath}`;
            } (locale === 'en')
            {
              return `https://github.com/UniPassID/UniPass-Wallet-Docs/tree/main/docs/${docPath}`;
            }

          }

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/UniPassID/UniPass-Wallet-Docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
        docsRouteBasePath: "/",
      },
    ],
    "docusaurus-plugin-sass",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "UniPass Wallet",
        hideOnScroll: true,
        logo: {
          alt: "UniPass Wallet Logo",
          src: "img/logo.svg",
          href: "/docs/category/introduction" 
        },
        items: [
          {
            type: "doc",
            docId: "introduction/intro",
            position: "left",
            label: "Tutorial",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/UniPassID/UniPass-Wallet-Docs",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/category/develop",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/UniPassID",
              },
              {
                label: "Discord",
                href: "https://discord.gg/XaRMFW85Pg",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCJZ4GOghuCdxBazZXc4M41g",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://medium.com/unipass",
              },
              {
                label: "GitHub",
                href: "https://github.com/UniPassID/UniPass-Wallet-Docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UniPass Wallet document, Built with ❤️.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'markdown',
          'json',
          'csharp',
          'dart'
        ]
      },
      colorMode: {
        defaultMode: 'dark'
      }
    }),
};

module.exports = config;
