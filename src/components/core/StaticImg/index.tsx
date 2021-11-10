import React, { FunctionComponent, useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeMode } from "styles/theme";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, StaticQuery } from "gatsby";

interface StaticImgProps {
  alt: string;
  src: string;
  srcDark?: string;
  maxWidth?: number;
}

interface ImageQueryProps {
  images: {
    edges: {
      node: {
        relativePath: string;
        sourceInstanceName: string;
        childImageSharp: IGatsbyImageData;
      };
    }[];
  };
}

export type ImgProps = StaticImgProps;

const StaticImg: FunctionComponent<ImgProps> = ({
  src,
  alt,
  srcDark,
  maxWidth,
  ...rest
}) => (
  <StaticQuery
    query={staticImgQuery}
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
        const imageData = getImage(image.node.childImageSharp);

        if (imageData) {
          return (
            <GatsbyImage
              style={{ maxWidth: maxWidth }}
              alt={alt}
              image={imageData}
              {...rest}
            />
          );
        }
      }

      return null;
    }}
  />
);

const staticImgQuery = graphql`
  query staticImgQuery {
    images: allFile(
      filter: { sourceInstanceName: { eq: "images" }, extension: { ne: "svg" } }
    ) {
      edges {
        node {
          relativePath
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default StaticImg;
