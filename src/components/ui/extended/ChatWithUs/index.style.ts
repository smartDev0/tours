import styled from "styled-components";
import { StyledTitle } from "components/core/Typography/Title/index.style";
import Button from "components/core/Button";
import { media } from "styled-bootstrap-grid";

const StyledChatWithUs = styled.section``;

const DescriptionContainer = styled.div`
  ${StyledTitle} {
    margin-bottom: 0;
  }
`;

const Description = styled.p`
  margin-top: 0.5em;
  margin-bottom: 1.5em;
`;

const CustomerServiceContainer = styled.div`
  position: relative;
  height: 300px;
`;

const CustomerService1 = styled.div`
  width: 140px;
  height: 140px;
  position: absolute;
  left: 170px;
  top: 150px;

  ${media.sm`
    left: 250px;
    top: 150px;  
  `}
`;
const CustomerService2 = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  left: 140px;
  top: 52px;

  ${media.sm`
    left: 220px;
    top: 52px;
  `}
`;
const CustomerService3 = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 20px;
  top: 140px;

  ${media.sm`
    left: 100px;
    top: 140px;
  `}
`;

const ChatWithUsButton = styled(Button)`
  display: flex;
  align-items: center;

  svg {
    margin-left: 8px;
    stroke: #fff;
  }
`;

export {
  StyledChatWithUs,
  DescriptionContainer,
  Description,
  CustomerServiceContainer,
  CustomerService1,
  CustomerService2,
  CustomerService3,
  ChatWithUsButton,
};
