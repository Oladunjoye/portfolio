import React, {Fragment} from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import '../main.css'
import Header from '../components/Header'
import SEO from "../components/seo"
import About from "../components/About"
import Services from "../components/Services"
import Portfolio from "../components/Portfolio"
import Experience from "../components/Experience"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <Header/>
    <About/>
    <Services/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Footer/>
    </Fragment>
)

export default IndexPage
