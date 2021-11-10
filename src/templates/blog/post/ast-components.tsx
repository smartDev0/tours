import React from "react";
import { BLOG_PATH } from "constants/paths";
import BlogLightBoxPicture from "components/ui/base/BlogLightBoxPicture";
import { slugify } from "utils/string";
import BlogTitle from "components/ui/base/BlogTitle";

const getObjectByType = (props: any, type: string) => {
  if (props.children) {
    for (let i = 0; i < props.children.length || 0; i++) {
      if (type === "string" && typeof props.children[i] === "string") {
        return props.children[i];
      }

      if (props.children[i].type && props.children[i].type === type) {
        return props.children[i];
      }

      if (props.children[i].props) {
        const childrenElement: any = getObjectByType(
          props.children[i].props,
          type
        );

        if (childrenElement && childrenElement.type === type) {
          return childrenElement;
        }
      }
    }

    return undefined;
  }

  return undefined;
};

const getTextInTitle = (titleElement: any): string => {
  if (titleElement.type === "text") {
    return titleElement.value;
  }

  for (let i = 0; i < titleElement.children?.length || 0; i++) {
    if (titleElement.children[i].type === "text") {
      return titleElement.children[i].value;
    }

    const child = getTextInTitle(titleElement.children[i]);
    if (child) {
      return child;
    }
  }

  throw new Error("Text in titles not found");
};

const LinkFixer = (props: any) => {
  if (props.href.startsWith("/")) {
    const optionalTrailingSlash = !props.href.endsWith("/") ? "/" : "";

    return (
      <a {...props} href={`${BLOG_PATH}${props.href}${optionalTrailingSlash}`}>
        {props.children}
      </a>
    );
  }

  return <a {...props}>{props.children}</a>;
};

const LightBoxPictureInFigure = (props: any) => {
  if (props.className?.includes("wp-block-image")) {
    const pictureElement = getObjectByType(props, "picture");
    const imgElement = getObjectByType(props, "img");

    return (
      <BlogLightBoxPicture
        pictureProps={pictureElement?.props}
        imgProps={pictureElement ? undefined : imgElement?.props}
      />
    );
  } else {
    return <figure {...props}>{props.children}</figure>;
  }
};

const LightBoxPictureInDiv = (props: any) => {
  if (props.className?.includes("wp-block-image")) {
    const pictureElement = getObjectByType(props, "picture");
    const imgElement = getObjectByType(props, "img");

    return (
      <BlogLightBoxPicture
        pictureProps={pictureElement?.props}
        imgProps={pictureElement ? undefined : imgElement?.props}
      />
    );
  }

  return <div {...props}>{props.children}</div>;
};

const H2ToBlogTitle = (props: any, location: Location) => {
  const id = slugify(getObjectByType(props, "string"));

  return <BlogTitle {...props} location={location} id={id} />;
};

export {
  getTextInTitle,
  LinkFixer,
  LightBoxPictureInFigure,
  LightBoxPictureInDiv,
  H2ToBlogTitle,
};
