import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/herosection"
import InfoBlock from "../components/Reusable/InfoBlock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"


const aboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="About LearnCodeOnline"
      subtitle=""
      heroclass="about-background"
    />
    <Dualinfoblock heading="A message from CEO" />
    <InfoBlock heading="About Vision"/>
  </Layout>
)


export const query = graphql`
{
  img:  file(relativePath: { eq: "about.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
  }
`

export default aboutPage
