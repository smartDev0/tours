import React from "react";
import {
  StyledTestimonials,
  TestimonialsAvatar,
  TestimonialsBiography,
  TestimonialsContainer,
  TestimonialsContent,
  TestimonialsDescription,
  TestimonialsInfo,
  TestimonialsInnerContainer,
  TestimonialsInnerWrapper,
  TestimonialsJob,
  TestimonialsName,
  TestimonialsRating,
  TestimonialsRatingStar,
  TestimonialsWrapper,
} from "components/ui/extended/Testimonials/index.style";
import { PageContainer } from "styles/global.style";
import Icon from "components/core/Icon";
import { Subtitle } from "components/core/Typography/Subtitle";
import { Title } from "components/core/Typography/Title";
import { useTranslation } from "react-i18next";
import Loop from "components/core/Loop";
import { graphql, useStaticQuery } from "gatsby";
import { TestimonialQueryResult } from "app-types/testimonial";
import { GatsbyImage } from "gatsby-plugin-image";
import Fade from "components/core/Animation/extended/Fade";

const Testimonials = () => {
  const { t, i18n } = useTranslation();

  const testimonials = useStaticQuery<TestimonialQueryResult>(
    graphql`
      query {
        all: allContentfulTestimonial(sort: { order: ASC, fields: order }) {
          edges {
            node {
              author
              id
              order
              role
              review
              avatar {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
              }
              node_locale
            }
          }
        }
      }
    `
  );

  const filteredTestimonials = testimonials.all.edges.filter(
    (item) => item.node.node_locale === i18n.language
  );

  const testimonialsToShow = [...filteredTestimonials, ...filteredTestimonials];

  return (
    <StyledTestimonials>
      <PageContainer>
        <Fade direction={"up"}>
          <Subtitle>
            {t("components.ui.extended.Testimonials.subtitle")}
          </Subtitle>
        </Fade>
        <Fade direction={"up"}>
          <Title>{t("components.ui.extended.Testimonials.title")}</Title>
        </Fade>
      </PageContainer>
      <Fade direction={"up"}>
        <TestimonialsWrapper>
          <TestimonialsInnerWrapper childrenCount={testimonialsToShow.length}>
            <Loop items={testimonialsToShow.map((item) => item.node)}>
              {(testimonial) => (
                <TestimonialsContainer
                  key={testimonial.id}
                  childrenCount={testimonialsToShow.length}
                >
                  <TestimonialsInnerContainer>
                    <TestimonialsContent>
                      <TestimonialsDescription>
                        {testimonial.review}
                      </TestimonialsDescription>
                      <TestimonialsRating>
                        <Loop items={[0, 1, 2, 3, 4]}>
                          {(index) => (
                            <TestimonialsRatingStar key={index}>
                              <Icon type={"star"} size={16} fill={"#fdae04"} />
                            </TestimonialsRatingStar>
                          )}
                        </Loop>
                      </TestimonialsRating>
                    </TestimonialsContent>
                    <TestimonialsBiography>
                      <TestimonialsAvatar>
                        <GatsbyImage
                          alt={testimonial.author}
                          image={
                            testimonial.avatar.localFile.childImageSharp
                              .gatsbyImageData
                          }
                        />
                      </TestimonialsAvatar>
                      <TestimonialsInfo>
                        <TestimonialsName>
                          {testimonial.author}
                        </TestimonialsName>
                        <TestimonialsJob>{testimonial.role}</TestimonialsJob>
                      </TestimonialsInfo>
                    </TestimonialsBiography>
                  </TestimonialsInnerContainer>
                </TestimonialsContainer>
              )}
            </Loop>
          </TestimonialsInnerWrapper>
        </TestimonialsWrapper>
      </Fade>
    </StyledTestimonials>
  );
};

export default Testimonials;
