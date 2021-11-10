import React, { ReactNode } from "react";
import { AnchorButton, StyledBlogTitle } from "./index.style";
import StaticSvg from "components/core/StaticSvg";
import Tooltip from "components/core/Tooltip";
import { useTranslation } from "react-i18next";
import copy from "copy-to-clipboard";

interface BlogTitleProps {
  location: Location;
  id?: string;
  children?: ReactNode;
}

const BlogTitle = (props: BlogTitleProps) => {
  const { t } = useTranslation();

  return (
    <StyledBlogTitle id={props.id}>
      <AnchorButton
        onClick={() =>
          copy(location.origin + location.pathname + "#" + props.id)
        }
      >
        <Tooltip
          type={"hover"}
          content={t("components.ui.base.BlogTitle.copyLink")}
          error={false}
        >
          <StaticSvg alt={"Link"} src={"icons/link.svg"} />
        </Tooltip>
      </AnchorButton>
      <h2>{props.children}</h2>
    </StyledBlogTitle>
  );
};

export default BlogTitle;
