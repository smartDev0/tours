import styled from "styled-components";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { Col, Container } from "styled-bootstrap-grid";
import { StyledRegisterCTA } from "components/ui/extended/RegisterCTA/index.style";
import Button from "components/core/Button";

export interface PlainHeaderContainerProps {
  maxWidth?: number;
}

export interface DescriptionProps {
  maxWidth?: number;
}

const StyledPlainHeader = styled.section`
  text-align: center;

  ${StyledHeading} {
    color: ${(props) => props.theme.titleColor};

    * {
      color: ${(props) => props.theme.titleColor};
    }
  }
`;

const Description = styled.p<DescriptionProps>`
  margin: 0;

  ${(props) =>
    props.maxWidth &&
    `
      max-width: ${props.maxWidth}px;
    `}
`;

const PlainHeaderContainer = styled(Container)<PlainHeaderContainerProps>`
  ${(props) =>
    props.maxWidth &&
    `
      max-width: ${props.maxWidth}px;
    `}

  ${StyledRegisterCTA} {
    margin-top: 32px;
  }
`;

const PlainHeaderCenteredCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlainHeaderCol = styled(PlainHeaderCenteredCol)`
  flex-direction: column;
  margin-top: 2em;
`;

const CTAButton = styled(Button)`
  margin-top: 32px;
`;

const ImageContainer = styled.div`
  margin-top: 2em;
`;

export {
  StyledPlainHeader,
  Description,
  PlainHeaderContainer,
  PlainHeaderCol,
  PlainHeaderCenteredCol,
  CTAButton,
  ImageContainer,
};
