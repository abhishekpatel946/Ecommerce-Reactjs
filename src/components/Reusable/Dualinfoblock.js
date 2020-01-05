import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function Dualinfoblock( {heading} ) {
    return (
        <section className="my-3 py-3 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Headings are second-generation headlines, words 
                            or phrases that introduce sections of a piece of 
                            content and thus help a writer organize the content 
                            into smaller components. This post describes three 
                            categories of headings and their functions.
                            Headings are second-generation headlines, words 
                            or phrases that introduce sections of a piece of 
                            content and thus help a writer organize the content 
                            into smaller components. This post describes three 
                            categories of headings and their functions.
                            Headings are second-generation headlines, words 
                            or phrases that introduce sections of a piece of 
                            content and thus help a writer organize the content 
                            into smaller components. This post describes three 
                            categories of headings and their functions.
                            Headings are second-generation headlines, words 
                            or phrases that introduce sections of a piece of 
                            content and thus help a writer organize the content 
                            into smaller components. This post describes three 
                            categories of headings and their functions.
                        </p>
                    </div>

                    <div className="col-4">
                        <div className="card bg-dark">
                            <img src="https://images.pexels.com/photos/2519825/pexels-photo-2519825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="image goes here" />
                            <div className="card-body" >
                                <h5 className="card-title text-success">Just Click Photo</h5>
                                <p className="card-text text-white">
                                    Some quick example text to build on the 
                                    card title and make up the bulk of the card's content.
                                </p>
                                <Link to="" className="btn btn-outline-success btn-block">{heading}</Link>
                            </div>
                         </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
