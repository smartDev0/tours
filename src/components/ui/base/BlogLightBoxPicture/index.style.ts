import styled from "styled-components";

const StyledBlogLightBoxPicture = styled.div`
  margin: 32px 0;
  display: flex;
  justify-content: center;
`;

const ClickablePicture = styled.picture`
  cursor: pointer;
  z-index: 0;

  img {
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 10%), 0 0 6px 0 rgb(0 0 0 / 10%),
      0 2px 2px -2px rgb(0 0 0 / 15%);
    overflow: hidden;
    border-radius: 7px;
    position: unset !important;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.baseLightColorTransparent};
  z-index: 1;

  picture {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 2;
  }

  img {
    max-width: 90% !important;
    max-height: 90% !important;
    width: auto !important;
    height: auto !important;
    position: relative !important;
    z-index: 2;
  }
`;

export { StyledBlogLightBoxPicture, ClickablePicture, Overlay };
