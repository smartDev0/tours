import styled from "styled-components";
import { Col, media } from "styled-bootstrap-grid";
import { StyledSubtitle } from "components/core/Typography/Subtitle/index.style";
import { Position } from "app-types/position";

const StyledVideoPreview = styled.section``;

const StoriesCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DescriptionCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const Description = styled.div<{ storiesPosition?: Position }>`
  margin-top: 64px;

  ${StyledSubtitle} {
    margin-top: 0;
  }

  ${media.md`
    margin-top: 0;
    padding-left: ${(props: any) =>
      !props.storiesPosition ||
      (props.storiesPosition && props.storiesPosition === "left")
        ? "80px"
        : "0"};
    padding-right: ${(props: any) =>
      props.storiesPosition && props.storiesPosition === "right"
        ? "80px"
        : "0"};
  `}
`;

const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    margin-left: 2px;
    transition: all 0.3s ease-in-out;
    stroke: ${(props) => props.theme.accentColor};
  }
`;

export { StyledVideoPreview, StoriesCol, Description, DescriptionCol, CTA };
