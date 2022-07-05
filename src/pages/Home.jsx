import React from "react";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import PolicyCard from "../components/PolicyCard";
import Section, {  SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import policy from "../assets/fake-data/policy";
import heroSliderData from "../assets/fake-data/hero-slider";
import productData from '../assets/fake-data/products'


const Home = () => {
  return (
    <Helmet title="Trang chủ">
      {/* hero slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={true}
        timeOut={5000}
      />
      {/* end hero slider */}
      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => 
            <Link to="/policy">
              <PolicyCard
                key={index}
                name={item.name}
                description={item.description}
                icon={item.icon}
              />
              </Link>
            )
            }
          </Grid>
          
        </SectionBody>
      </Section>
      {/* end policy section */}

      {/* best selling */}
      <Section>
        <SectionTitle>Top sản phẩm bán chạy</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {
                // console.log(productData.getProducts(4));
                 productData.getProducts(4).map((item, index)=> (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={item.price}
                    slug={item.slug}
                  />
                ))
              }
          </Grid>
        </SectionBody>
      </Section>
      {/* end best selling */}
    </Helmet>
  );
};

export default Home;
