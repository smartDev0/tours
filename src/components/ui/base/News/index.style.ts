import styled from "styled-components";

const Arrow = styled.div`
  display: flex;
  flex: auto;
  position: relative;
  right: -16px;
`;

const ArrowLine = styled.span`
  position: absolute;
  background: ${(props) => props.theme.titleColor};
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
`;

const ArrowTop = styled(ArrowLine)`
  position: absolute;
  width: 6px;
  height: 2px;
  margin: -10px 0 0px -10px;
  right: 0;
  transform: translate(0px, 0px) rotate(45deg);
  top: calc(50%);
`;

const ArrowBottom = styled(ArrowLine)`
  position: absolute;
  width: 6px;
  height: 2px;
  margin: -10px 0 0 -10px;
  right: 0;
  top: calc(50% + 4px);
  transform: translate(0px, 0px) rotate(-45deg);
`;

const ArrowCenter = styled(ArrowLine)`
  width: 8px;
  height: 2px;
  margin: -8px 0 0 -7px;
  right: 0;
  top: calc(50%);
  opacity: 0;
`;

const StyledNews = styled.h3`
  font-size: 12px;
  color: ${(props) => props.theme.titleColor};
  background: #f0f2f7;
  padding: 4px 32px 4px 4px;
  border-radius: 10px;
  display: inline-block;
  line-height: 1em;

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

const StyledNewsTag = styled.span`
  background: ${(props) => props.theme.accentColor};
  color: #fff;
  padding: 0 9px;
  border-radius: 20px;
  display: inline-block;
  line-height: 1.4;
  margin-right: 16px;
`;

export { StyledNews, StyledNewsTag, Arrow, ArrowBottom, ArrowCenter, ArrowTop };
