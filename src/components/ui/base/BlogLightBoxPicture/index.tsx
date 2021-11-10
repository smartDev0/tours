import React, { useEffect, useState } from "react";
import {
  ClickablePicture,
  Overlay,
  StyledBlogLightBoxPicture,
} from "./index.style";

interface LightBoxPictureProps {
  pictureProps?: any;
  imgProps?: any;
}

const BlogLightBoxPicture = ({
  pictureProps,
  imgProps,
}: LightBoxPictureProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  });

  return (
    <StyledBlogLightBoxPicture>
      <ClickablePicture {...pictureProps} onClick={() => setOpen(true)}>
        {imgProps ? (
          <img {...imgProps} />
        ) : pictureProps ? (
          pictureProps.children ? (
            pictureProps.children
          ) : null
        ) : null}
      </ClickablePicture>
      {open && (
        <Overlay onClick={() => setOpen(false)}>
          <picture {...pictureProps}>
            {imgProps ? (
              <img {...imgProps} />
            ) : pictureProps ? (
              pictureProps.children ? (
                pictureProps.children
              ) : null
            ) : null}
          </picture>
        </Overlay>
      )}
    </StyledBlogLightBoxPicture>
  );
};

export default BlogLightBoxPicture;
