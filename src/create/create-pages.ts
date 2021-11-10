import {GatsbyNode} from "gatsby";
import {deletePages} from "./delete-pages";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  // await createBlogAuthors(actions, graphql);
  // await createBlogCategories(actions, graphql);
  // await createBlogPosts(actions, graphql);
  // await createBlogTags(actions, graphql);
};

export const onCreatePage: GatsbyNode["onCreatePage"] = async ({
  page,
  actions,
}) => {
  await deletePages(page, actions);
};
