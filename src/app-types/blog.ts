import { IGatsbyImageData } from "gatsby-plugin-image";

export interface AuthorWithPost {
  avatar: {
    url: string;
  };
  seo: {
    title: string;
    metaDesc: string;
  };
  name: string;
  uri: string;
  description: string;
  posts: {
    nodes: Post[];
  };
}

export interface CategoryWithPost {
  name: string;
  description: string;
  uri: string;
  slug: string;
  seo: {
    title: string;
    metaDesc: string;
  };
  posts: {
    nodes: Post[];
  };
}

export interface TagWithPost {
  name: string;
  description: string;
  uri: string;
  slug: string;
  seo: {
    title: string;
    metaDesc: string;
  };
  posts: {
    nodes: Post[];
  };
}

export interface Post {
  author: {
    node: {
      avatar: {
        url: string;
      };
      name: string;
      uri: string;
      description: string;
    };
  };
  categories: {
    nodes: {
      name: string;
      description: string;
      slug: string;
      uri: string;
    }[];
  };
  tags: {
    nodes: {
      name: string;
      uri: string;
    }[];
  };
  date: string;
  datePublished: string;
  dateModified: string;
  uri: string;
  slug: string;
  title: string;
  content: string;
  seo: {
    title: string;
    metaDesc: string;
  };
  smallFeaturedImage: {
    node: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
  bigFeaturedImage: {
    node: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    };
  };
}

export interface AllPostQueryResult {
  allPostResult: {
    nodes: Post[];
  };
  allRehypePosts: {
    nodes: {
      context: {
        slug: string;
      };
      htmlAst: any;
    }[];
  };
}

export interface AllAuthorWithPostQueryResult {
  allAuthorWithPostResult: {
    nodes: AuthorWithPost[];
  };
}

export interface AllCategoryWithPostQueryResult {
  allCategoryWithPostResult: {
    nodes: CategoryWithPost[];
  };
}

export interface AllTagWithPostQueryResult {
  allTagWithPostResult: {
    nodes: TagWithPost[];
  };
}
