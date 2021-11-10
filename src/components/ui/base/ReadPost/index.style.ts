import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

const StyledReadPost = styled.div`
  color: #fff;
`;

const OuterContainer = styled.div`
  max-width: 95%;
  margin: 0 auto;
  border-radius: 20px;
  position: relative;
`;

const WrapperContainer = styled.div`
  color: ${(props) => props.theme.baseLightColor};
`;

const Arrow = styled.div`
  display: flex;
  flex: auto;
  position: relative;
  right: -16px;
`;

const ArrowLine = styled.span`
  position: absolute;
  background: #fff;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
`;

const ArrowTop = styled(ArrowLine)`
  position: absolute;
  width: 7px;
  height: 2px;
  margin: -3px 0 0 -10px;
  right: 0;
  transform: translate(0px, 0px) rotate(45deg);
  top: calc(50%);
`;

const ArrowBottom = styled(ArrowLine)`
  position: absolute;
  width: 7px;
  height: 2px;
  margin: -3px 0 0 -10px;
  right: 0;
  top: calc(50% + 4px);
  transform: translate(0px, 0px) rotate(-45deg);
`;

const ArrowCenter = styled(ArrowLine)`
  width: 9px;
  height: 2px;
  margin: -1px 0 0 -10px;
  right: 0;
  top: calc(50%);
  opacity: 0;
`;

const Divider = styled.span`
  margin: 0 8px;
  color: #fff;
`;

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const PostInnerContainer = styled.div`
  border-radius: 24px;
  background: ${(props) => props.theme.gradientAccentColor};
  color: #fff;
  display: inline-flex;
  align-items: center;
  padding: 4px 30px 4px 16px;
  font-size: 16px;
  line-height: 1;
  opacity: 0.9;

  ${media.md`
      padding: 0 30px 0 16px;
    `}

  &:hover {
    opacity: 1;

    ${ArrowTop}, ${ArrowBottom} {
      right: -2px;
    }

    ${ArrowCenter} {
      opacity: 1;
    }
  }
`;

const SpanHideMobile = styled.span`
  display: none;
  font-size: inherit;
  color: inherit;

  ${media.lg`
    padding-left: 4px;
    display: block;
  `}
`;

export {
  StyledReadPost,
  OuterContainer,
  WrapperContainer,
  Divider,
  PostInnerContainer,
  PostContainer,
  Arrow,
  ArrowTop,
  ArrowBottom,
  ArrowCenter,
  SpanHideMobile,
};
