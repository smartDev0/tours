import React, { FunctionComponent, ImgHTMLAttributes, useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeMode } from "styles/theme";
import { graphql, StaticQuery } from "gatsby";

interface StaticSvgProps {
  alt: string;
  src: string;
  srcDark?: string;
}

interface ImageQueryProps {
  images: {
    edges: {
      node: {
        relativePath: string;
        publicURL: string;
        extension: string;
      };
    }[];
  };
}

export type SvgProps = StaticSvgProps & ImgHTMLAttributes<HTMLImageElement>;

const StaticSvg: FunctionComponent<SvgProps> = ({
  src,
  alt,
  srcDark,
  ...rest
}) => (
  <StaticQuery
    query={staticSvgQuery}
    render={(data: ImageQueryProps) => {
      const themeContext = useContext(ThemeContext);
      const computedSrc =
        themeContext.mode === ThemeMode.Light || srcDark === undefined
          ? src
          : srcDark;

      const image = data.images.edges.find(
        (n) => n.node.relativePath === computedSrc
      );

      if (image) {
        const publicURL = image.node.publicURL;

        if (publicURL) {
          return <img src={publicURL} alt={alt} {...rest} />;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }}
  />
);

const staticSvgQuery = graphql`
  query staticSvgQuery {
    images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          relativePath
          extension
          publicURL
        }
      }
    }
  }
`;

export default StaticSvg;
