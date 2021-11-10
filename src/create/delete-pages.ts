import { Actions, Page } from "gatsby";
import { MONOLANGUAGE_PAGES } from "../constants/paths";

const config = require("../../gatsby-config");

export const deletePages = async (page: Page<any>, actions: Actions) => {
  MONOLANGUAGE_PAGES.forEach((pageToDelete) => {
    if (
      page.path.includes(pageToDelete) &&
      page.context.locale !== config.siteMetadata.defaultLanguage
    ) {
      actions.deletePage(page);
      actions.createRedirect({
        fromPath: page.path,
        toPath: page.context.originalPath,
        isPermanent: true,
        statusCode: 301,
      });
    }
  });
};
