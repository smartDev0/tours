import styled from "styled-components";
import { Col, Container } from "styled-bootstrap-grid";
import { StyledRegisterCTA } from "components/ui/extended/RegisterCTA/index.style";
import { UnderlinedLink } from "styles/global.style";

export interface NpsWidgetContainerProps {
  maxWidth?: number;
}

export interface DescriptionProps {
  maxWidth?: number;
}

const StyledNpsWidget = styled.section`
  text-align: center;
`;

const Description = styled.p<DescriptionProps>`
  margin: 0;

  ${(props) =>
    props.maxWidth &&
    `
      max-width: ${props.maxWidth}px;
    `}
`;

const NpsWidgetContainer = styled(Container)<NpsWidgetContainerProps>`
  ${(props) =>
    props.maxWidth &&
    `
      max-width: ${props.maxWidth}px;
    `}

  ${StyledRegisterCTA} {
    margin-top: 32px;
  }
`;

const NpsWidgetCenteredCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NpsWidgetCol = styled(NpsWidgetCenteredCol)`
  flex-direction: column;
  margin-top: 2em;
`;

const ImageContainer = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
`;

const ImageInnerContainer = styled.div`
  max-width: 300px;
`;

const UnderlinedLinkWithIcon = styled(UnderlinedLink)`
  display: inline-flex;

  svg {
    margin-left: 8px;
    stroke: ${(props) => props.theme.accentColor};
  }
`;

export {
  StyledNpsWidget,
  Description,
  NpsWidgetContainer,
  NpsWidgetCol,
  NpsWidgetCenteredCol,
  ImageInnerContainer,
  ImageContainer,
  UnderlinedLinkWithIcon,
};
