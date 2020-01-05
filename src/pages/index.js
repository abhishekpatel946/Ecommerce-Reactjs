import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/herosection"
import InfoBlock from "../components/Reusable/InfoBlock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import Teamphotosection from "../components/About/Teamphotosection"
import CourseCart from '../components/Cart/CourseCart'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="I Write Code"
      subtitle="abhidekho.netlify.com"
      heroclass="hero-background"
    />
    <InfoBlock heading="About Us"/>
    <CourseCart courses={data.courses} />
    
    <Dualinfoblock heading="Our Team" />
    <Teamphotosection />
  </Layout>
)

export const query = graphql`
{
  img:  file(relativePath: { eq: "heromain.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

  courses: allContentfulCourses {
        edges{
          node{
            id
            title
            price
            category
            description {
              description 
            }
            image {
              fixed(width:200, height:120) {
                ...GatsbyContentfulFixed_tracedSVG
              }
            }
          }  
        }
      }
  }
`

export default IndexPage
