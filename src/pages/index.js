import React, { useEffect, useState  } from 'react';
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "components/Layout";
import Seo from 'components/Seo';
import { StaticImage } from "gatsby-plugin-image"

const capri = '../assets/media/capri.png';
const deepbluefishing = '../assets/media/deepbluefishing.png';
const streamline = '../assets/media/streamline.png';
const milenadcs = '../assets/media/milena_dcs2.png';
const yachtcruise = '../assets/media/yachtcruise.png';


const IndexPage = ({location, data}) => {

  return (
    <Layout>
      <Seo
        title={'Creative Technologies & Digital Transformation'}
        pathname={location.pathname}
      />
      <section className="section">
        <div className="container">
          <h1>Creative Technologies & Digital Transformation</h1>
            <StaticImage placeholder="blurred" className="banner"  src={'../assets/media/banner.jpg'} alt="Oryx" width={700} />
          <p className="narrow">We are truly passionate about innovation and disruption and we want to make your ideas become real.</p>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "services"}}) {
      html
    }
  }
`

export default IndexPage
