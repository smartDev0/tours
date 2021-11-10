import {
  ALTERNATIVES_PATH,
  BLOG_PATH,
  MONOLANGUAGE_PAGES,
  SUCCESS_STORIES_PATH,
  WEBINARS_PATH,
} from "../constants/paths";

// TODO: Check how to use baseUrl in gatsby-node.js

const getAlternativePath = (slug: string): string => {
  return `${ALTERNATIVES_PATH}/${slug}/`;
};

const getWebinarsPath = (slug: string): string => {
  return `${WEBINARS_PATH}/${slug}/`;
};

const getSuccessStoriesPath = (slug: string): string => {
  return `${SUCCESS_STORIES_PATH}/${slug}/`;
};

const getBlogPath = (uri: string): string => {
  return `${BLOG_PATH}${uri}/`;
};

const getBlogWithPagePath = (uri: string, page: number): string => {
  return `${getBlogPath(uri)}${page}/`;
};

const getLocalizedPath = (
  locale: string,
  path: string,
  defaultLanguage: string
) => {
  const localePrefix = locale !== defaultLanguage ? "/" + locale : "";
  return `${localePrefix}${path}`;
};

const isMonolanguagePage = (path: string) => {
  let isMonolanguage = false;

  MONOLANGUAGE_PAGES.forEach((page) => {
    if (path.includes(page)) {
      isMonolanguage = true;
    }
  });

  return isMonolanguage;
};

export {
  getAlternativePath,
  getWebinarsPath,
  getLocalizedPath,
  getSuccessStoriesPath,
  getBlogPath,
  getBlogWithPagePath,
  isMonolanguagePage,
};
