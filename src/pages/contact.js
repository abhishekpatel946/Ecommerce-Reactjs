import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/herosection"
import InfoBlock from "../components/Reusable/InfoBlock"
import Contact from '../components/Contact/Contact'


const contactPage = ({data}) => (
  <Layout>
    <SEO title="Contact Us" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="Contact Us"
      subtitle=""
      heroclass="contact-background"
    />
    <InfoBlock heading="How can we help?"/>
    <Contact />
  </Layout>
)


export const query = graphql`
{
  img:  file(relativePath: { eq: "contact.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
  }
`

export default contactPage
