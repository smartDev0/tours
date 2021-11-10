import { Actions, CreatePagesArgs } from "gatsby";
import * as path from "path";
import { AllCategoryWithPostQueryResult } from "../app-types/blog";
import { POSTS_PER_PAGE } from "../constants/blog";
import { getBlogPath, getBlogWithPagePath } from "../utils/path";

export const createBlogCategories = async (
  actions: Actions,
  graphql: CreatePagesArgs["graphql"]
): Promise<void> => {
  const result = await graphql<AllCategoryWithPostQueryResult>(`
    query {
      allCategoryWithPostResult: allWpCategory {
        nodes {
          name
          description
          slug
          uri
          seo {
            title
            metaDesc
          }
          posts {
            nodes {
              author {
                node {
                  avatar {
                    url
                  }
                  name
                  uri
                  description
                }
              }
              categories {
                nodes {
                  name
                  description
                  slug
                  uri
                }
              }
              date(formatString: "MMM DD, YYYY")
              uri
              title
              content
              seo {
                title
                metaDesc
              }
              smallFeaturedImage: featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        placeholder: BLURRED
                        height: 300
                        width: 500
                      )
                    }
                  }
                }
              }
              bigFeaturedImage: featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  result.data &&
    result.data.allCategoryWithPostResult.nodes.forEach((node) => {
      const numberOfPages = Math.ceil(node.posts.nodes.length / POSTS_PER_PAGE);

      Array.from({ length: numberOfPages }).forEach((_, i) => {
        const currentPath =
          i === 0
            ? getBlogPath(node.uri)
            : `${getBlogWithPagePath(node.uri, i + 1)}`;
        let newerPath;
        let olderPath;

        if (i === 0) {
          newerPath = undefined;
        } else if (i === 1) {
          newerPath = getBlogPath(node.uri);
        } else {
          newerPath = getBlogWithPagePath(node.uri, i);
        }

        if (i === numberOfPages - 1) {
          olderPath = undefined;
        } else {
          olderPath = getBlogWithPagePath(node.uri, i + 2);
        }

        actions.createPage({
          path: currentPath,
          component: path.resolve("./src/templates/blog/category/index.tsx"),
          context: {
            pagination: {
              olderPath: olderPath,
              newerPath: newerPath,
              limit: POSTS_PER_PAGE,
              skip: i * POSTS_PER_PAGE,
              numberOfPages: numberOfPages,
              currentPage: i + 1,
            },
            category: node,
            posts: node.posts.nodes.slice(
              i * POSTS_PER_PAGE,
              i * POSTS_PER_PAGE + POSTS_PER_PAGE
            ),
          },
        });
      });
    });
};
