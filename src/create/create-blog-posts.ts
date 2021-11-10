import { Actions, CreatePagesArgs } from "gatsby";
import * as path from "path";
import { AllPostQueryResult } from "../app-types/blog";
import { getBlogPath } from "../utils/path";

export const createBlogPosts = async (
  actions: Actions,
  graphql: CreatePagesArgs["graphql"]
): Promise<void> => {
  const result = await graphql<AllPostQueryResult>(`
    query {
      allPostResult: allWpPost {
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
          tags {
            nodes {
              name
              uri
            }
          }
          date(formatString: "MMM DD, YYYY")
          datePublished: date
          dateModified: modified
          uri
          slug
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
                  gatsbyImageData(placeholder: BLURRED, height: 300, width: 500)
                }
              }
            }
          }
          bigFeaturedImage: featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    height: 500
                    width: 1200
                  )
                }
              }
            }
          }
        }
      }
      allRehypePosts: allHtmlRehype(
        filter: { parent: { internal: { type: { eq: "WpPost" } } } }
      ) {
        nodes {
          context {
            slug
          }
          htmlAst
        }
      }
    }
  `);

  result.data &&
    result.data.allPostResult.nodes.forEach((node) => {
      const htmlAst = result.data?.allRehypePosts.nodes.find(
        (rehypeNode) => rehypeNode.context.slug === node.slug
      )?.htmlAst;
      actions.createPage({
        path: getBlogPath(node.uri),
        component: path.resolve("./src/templates/blog/post/index.tsx"),
        context: {
          post: node,
          htmlAst,
        },
      });
    });
};
