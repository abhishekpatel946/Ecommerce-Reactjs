import React from 'react'
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({ heading }) {
    return (
        <section className="bg-theme my-3 py-3">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Headings are second-generation headlines, words or 
                            phrases that introduce sections of a piece of content and 
                            thus help a writer organize the content into smaller components.
                            This post describes three categories of headings and their functions.
                        </p> 
                            <Link to="/about/">
                                <button className="btn btn-primary btn-lg">
                                    {heading}
                                </button>
                            </Link>
                     </div>
                </div>
            </div> 
        </section>
    )
}
