import styled from "styled-components";
import { Col, media } from "styled-bootstrap-grid";
import { antirotate, rotate } from "styles/global.keyframes.style";
import { lighten } from "polished";

const height = 540;
const firstOrbit = 160;
const secondOrbit = 280;
const thirdOrbit = 450;
const integrationSize = 80;

const mobileHeight = 390;
const mobileFirstOrbit = 100;
const mobileSecondOrbit = 190;
const mobileThirdOrbit = 280;
const mobileIntegrationSize = 40;

const StyledIntegrations = styled.section``;

const Description = styled.div``;

const IntegrationCol = styled(Col)`
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 1;

  ${media.lg`
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  `}
`;

const IntegrationContainer = styled.ul`
  position: relative;
  height: ${mobileHeight}px;
  list-style: none;
  -webkit-transition: all 0.09s ease-in;
  -moz-transition: all 0.09s ease-in;
  -o-transition: all 0.09s ease-in;
  transition: all 0.09s ease-in;
  overflow: hidden;
  padding: 0;
  margin: 0;

  ${media.sm`
    height: ${height}px;
  `}
`;

const FirstOrbit = styled.li`
  display: block;
  position: absolute;
  opacity: 1;
  width: ${mobileFirstOrbit}px;
  height: ${mobileFirstOrbit}px;
  border-radius: 50%;
  top: calc(50% - ${mobileFirstOrbit / 2}px);
  left: calc(50% - ${mobileFirstOrbit / 2}px);
  z-index: 99;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${rotate};
  animation-duration: 8s;

  ${media.sm`
    width: ${firstOrbit}px;
    height: ${firstOrbit}px;
    top: calc(50% - ${firstOrbit / 2}px);
    left: calc(50% - ${firstOrbit / 2}px);
  `}
`;

const IntegrationFirstOrbit = styled.div`
  position: absolute;
  width: ${mobileIntegrationSize}px;
  height: ${mobileIntegrationSize}px;
  border-radius: 50%;
  overflow: hidden;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${antirotate};
  animation-duration: 8s;

  ${media.sm`
    width: ${integrationSize}px;
    height: ${integrationSize}px;
  `}
`;

const Integration1 = styled(IntegrationFirstOrbit)`
  top: 70px;
  left: 60px;

  ${media.sm`
    top: 120px;
    left: 60px;
  `}
`;

const Integration2 = styled(IntegrationFirstOrbit)`
  top: 40px;
  left: -20px;

  ${media.sm`
    top: 26px;
    left: -32px;
  `}
`;

const Integration3 = styled(IntegrationFirstOrbit)`
  top: -10px;
  left: 60px;

  ${media.sm`
    top: -10px;
    left: 95px;
  `}
`;

const SecondOrbit = styled.li`
  display: block;
  position: absolute;
  border: ${mobileIntegrationSize / 1.5}px solid
    ${(props) => lighten(0.3, props.theme.accentColor)};
  opacity: 0.7;
  width: ${mobileSecondOrbit}px;
  height: ${mobileSecondOrbit}px;
  border-radius: 50%;
  top: calc(50% - ${mobileSecondOrbit / 2}px);
  left: calc(50% - ${mobileSecondOrbit / 2}px);
  z-index: 10;

  ${(props) => media.sm`
    border: ${integrationSize / 1.5}px solid
      ${lighten(0.3, props.theme.accentColor)};
    width: ${secondOrbit}px;
    height: ${secondOrbit}px;
    top: calc(50% - ${secondOrbit / 2}px);
    left: calc(50% - ${secondOrbit / 2}px);
  `}
`;

const ThirdOrbit = styled.li`
  display: block;
  position: absolute;
  border: 2px solid ${(props) => lighten(0.3, props.theme.accentColor)};
  opacity: 1;
  width: ${mobileThirdOrbit}px;
  height: ${mobileThirdOrbit}px;
  border-radius: 50%;
  top: calc(50% - ${mobileThirdOrbit / 2}px);
  left: calc(50% - ${mobileThirdOrbit / 2}px);
  z-index: 100;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${antirotate};
  animation-duration: 12s;

  ${media.sm`
    width: ${thirdOrbit}px;
    height: ${thirdOrbit}px;
    border-radius: 50%;
    top: calc(50% - ${thirdOrbit / 2}px);
    left: calc(50% - ${thirdOrbit / 2}px);
  `}
`;

const IntegrationThirdOrbit = styled.div`
  position: absolute;
  width: ${mobileIntegrationSize}px;
  height: ${mobileIntegrationSize}px;
  border-radius: 50%;
  overflow: hidden;

  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ${rotate};
  animation-duration: 12s;

  ${media.sm`
    width: ${integrationSize}px;
    height: ${integrationSize}px;
  `}
`;

const Integration4 = styled(IntegrationThirdOrbit)`
  top: -10px;
  left: 68px;

  ${media.sm`
    top: -35px;
    left: 160px;
  `}
`;

const Integration5 = styled(IntegrationThirdOrbit)`
  top: 145px;
  left: -17px;

  ${media.sm`
    top: 145px;
    left: -35px;
  `}
`;

const Integration6 = styled(IntegrationThirdOrbit)`
  top: 255px;
  left: 94px;

  ${media.sm`
    top: 390px;
    left: 94px;
  `}
`;

const Integration7 = styled(IntegrationThirdOrbit)`
  top: 196px;
  left: 236px;

  ${media.sm`
    top: 305px;
    left: 375px;
  `}
`;

const Integration8 = styled(IntegrationThirdOrbit)`
  top: 39px;
  left: 230px;

  ${media.sm`
    top: 65px;
    left: 370px;
  `}
`;

const DescriptionCol = styled(Col)`
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;

  ${media.lg`
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
  `}
`;

export {
  StyledIntegrations,
  Description,
  IntegrationCol,
  DescriptionCol,
  IntegrationContainer,
  Integration1,
  Integration2,
  Integration3,
  Integration4,
  Integration5,
  Integration6,
  Integration7,
  Integration8,
  FirstOrbit,
  SecondOrbit,
  ThirdOrbit,
};
