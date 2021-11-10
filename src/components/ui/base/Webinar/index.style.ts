import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

const StyledWebinar = styled.div`
  padding: 32px 0;

  ${media.md`
    padding: 32px 32px 32px 0;
  `}
`;

const WebinarTitle = styled.span`
  display: block;
  font-weight: bold;
  margin-top: 8px;

  a {
    font-size: 16px;
    color: ${(props) => props.theme.titleColor};

    &:hover {
      text-decoration: underline;
    }

    ${media.md`
      font-size: 22px;
      line-height: 1.4;
    `}
  }
`;

const WebinarDescription = styled.span`
  display: block;
  font-size: 16px;
`;

const CoverContainer = styled.div`
  position: relative;

  &:hover {
    opacity: 0.9;
  }
`;

const HostImageContainer = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 50;
`;

const DurationContainer = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  background: #fff;
  border-radius: ${(props) => props.theme.borderRadius};
  border-bottom: 1px solid ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.titleColor};
  padding: 8px 16px;
  z-index: 50;
  font-size: 16px;
`;

const CTAContainer = styled.div`
  a {
    font-size: 16px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export {
  StyledWebinar,
  WebinarTitle,
  WebinarDescription,
  CoverContainer,
  HostImageContainer,
  DurationContainer,
  CTAContainer,
};
