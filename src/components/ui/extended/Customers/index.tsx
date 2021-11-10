import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  Slider,
  SliderContainer,
  SliderList,
  SliderOption,
  StyledCustomers,
} from "components/ui/extended/Customers/index.style";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import { Subtitle } from "components/core/Typography/Subtitle";
import Counter from "components/core/Counter";
import { Title } from "components/core/Typography/Title";
import { InView } from "react-intersection-observer";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

export interface CustomersProps {
  statistics: {
    nodes: {
      apps: {
        unit: string;
        value: string;
      };
      users: {
        unit: string;
        value: string;
      };
    }[];
  };
  customers: {
    nodes: {
      name: string;
      childImageSharp: IGatsbyImageData;
    }[];
  };
  customersIt: {
    nodes: {
      name: string;
      childImageSharp: IGatsbyImageData;
    }[];
  };
}

const Customers = () => {
  const { statistics, customers, customersIt }: CustomersProps =
    useStaticQuery(graphql`
      query {
        statistics: allRestApiV3PublicStatistics {
          nodes {
            apps {
              unit
              value
            }
            users {
              unit
              value
            }
          }
        }
        customers: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            relativeDirectory: { eq: "customers" }
          }
        ) {
          nodes {
            name
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        customersIt: allFile(
          filter: {
            sourceInstanceName: { eq: "images" }
            relativeDirectory: { eq: "customers/it" }
          }
        ) {
          nodes {
            name
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    `);

  const { t, i18n } = useTranslation();
  let customersToShow = [];

  /** Double the customers for UI */
  if (i18n.language === "it") {
    customersToShow = [
      ...customersIt.nodes,
      ...customers.nodes,
      ...customersIt.nodes,
      ...customers.nodes,
    ];
  } else {
    customersToShow = [...customers.nodes, ...customers.nodes];
  }

  return (
    <StyledCustomers>
      <MediumComponentContainer>
        <PageContainer>
          <Subtitle>
            {t("components.ui.extended.Customers.ourCustomers")}
          </Subtitle>
          <Title>
            <Counter
              from={0}
              to={parseFloat(statistics.nodes[0].apps.value) * 1000}
              duration={2}
              thousandsSeparators
              locale={i18n.language}
            />{" "}
            {t("components.ui.extended.Customers.businessTitle")}
          </Title>
        </PageContainer>
        <InView triggerOnce>
          <SliderContainer>
            <Slider>
              <SliderList childrenCount={customersToShow.length}>
                {customersToShow.map((customer, idx) => {
                  const customerImage = getImage(customer.childImageSharp);

                  if (customerImage) {
                    return (
                      <SliderOption
                        key={idx}
                        childrenCount={customersToShow.length}
                      >
                        <GatsbyImage
                          alt={customer.name}
                          image={customerImage}
                        />
                      </SliderOption>
                    );
                  }
                })}
              </SliderList>
            </Slider>
          </SliderContainer>
        </InView>
      </MediumComponentContainer>
    </StyledCustomers>
  );
};

export default Customers;
