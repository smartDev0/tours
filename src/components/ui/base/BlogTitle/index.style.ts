import styled from "styled-components";

const AnchorButton = styled.button`
  opacity: 0;
  transition: all 200ms ease-in-out;
  position: absolute;
  display: flex;
  top: 24px;
  left: -32px;
  background: transparent;
  border: 0;
  padding: 0;

  img {
    box-shadow: none !important;
    border-radius: 0 !important;
  }
`;

const StyledBlogTitle = styled.div`
  position: relative;

  &:hover {
    ${AnchorButton} {
      opacity: 1;
    }
  }
`;

export { StyledBlogTitle, AnchorButton };
