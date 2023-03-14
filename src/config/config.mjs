import defaultImage from '../assets/images/default.png';

const CONFIG = {
  name: 'AstroWind',

  origin: 'https://astro-demo.birki.io',
  basePathname: '/',
  trailingSlash: false,

  title: 'AstroWind — Free template for create a website with Astro + Tailwind CSS + GitHub Pages',
  description:
    '🚀 Suitable for Startups, Small Business, Sass Websites, Professional Portfolios, Marketing Websites, Landing Pages & Blogs.',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: '',

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },

  announcement: {
    enabled: true,
    text: 'This is an <b>announcement</b>',
    type: "info"
  },

  faqs: {
    enabled: true,
  }
};

export default CONFIG;
export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;