
import React from "react"
import PropTypes from "prop-types"
import Footer from "./Reusable/Footer"
import Navbar from "./Reusable/Navbar"
import "./bootstrap.min.css"
import "./layout.css"

 
const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
