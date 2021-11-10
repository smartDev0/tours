import styled, { keyframes } from "styled-components";
import { media } from "styled-bootstrap-grid";

const translateInfinite = (childrenCount: number) => keyframes`
    100% { transform:translateX(calc(-380px * ${childrenCount}));  }
`;

const StyledTestimonials = styled.section`
  margin: 64px 0;
  text-align: center;
`;

const TestimonialsWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #fff;

  &::before,
  &::after {
    content: " ";
    position: absolute;
    z-index: 9;
    width: 80px;
    ${media.lg`
      width: 220px;
    `}
    height: 100%;
  }
  &::before {
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  &::after {
    top: 0;
    right: 0;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const TestimonialsContainer = styled.div<{ childrenCount: number }>`
  border: none;
  outline: none;
  width: 380px;
  padding: 20px;

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) => translateInfinite(props.childrenCount / 2)}
    ${(props) => props.childrenCount * 2}s linear infinite;
`;

const TestimonialsInnerWrapper = styled.div<{ childrenCount: number }>`
  display: flex;
  height: 100%;
  width: calc(380px * ${(props) => props.childrenCount});
  padding: 0;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  &:hover {
    ${TestimonialsContainer} {
      animation-play-state: paused;
    }
  }
`;

const TestimonialsInnerContainer = styled.div``;

const TestimonialsContent = styled.div`
  background-color: #fff;
  padding: 24px;
  margin: 20px;
  border-radius: ${(props) => props.theme.borderRadius};
  transition: all 0.3s ease-in-out;
  position: relative;
  text-align: left;
  box-shadow: 0 20px 30px 0 rgba(10, 1, 47, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 264px;

  &:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 8px solid transparent;
    border-top: 16px solid #fff;
    bottom: -15px;
    position: absolute;
    left: 100px;
  }
`;

const TestimonialsDescription = styled.p`
  font-size: 16px;
  line-height: 28px;
`;

const TestimonialsRating = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TestimonialsRatingStar = styled.li`
  display: inline-block;
`;

const TestimonialsBiography = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 35px;
  margin-left: 100px;
`;

const TestimonialsAvatar = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  flex-shrink: 0;

  picture {
    border-radius: 50%;
  }
`;

const TestimonialsInfo = styled.div`
  text-align: left;
`;

const TestimonialsName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const TestimonialsJob = styled.span``;

export {
  StyledTestimonials,
  TestimonialsContainer,
  TestimonialsInnerContainer,
  TestimonialsContent,
  TestimonialsDescription,
  TestimonialsRating,
  TestimonialsRatingStar,
  TestimonialsBiography,
  TestimonialsAvatar,
  TestimonialsInfo,
  TestimonialsName,
  TestimonialsWrapper,
  TestimonialsInnerWrapper,
  TestimonialsJob,
};
