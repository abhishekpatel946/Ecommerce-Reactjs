import React from 'react'
import Heading from '../Reusable/Heading'

export default function contact() {
    return (
        <section className="bg-theme py-1">
            <div className="container">
                <Heading title="Contact Us" />
                <div className="col-10 col-sm-8 mx-auto bg-theme">
                    <form action="https://formspree.io/mzbdwqdk" method="POST">
                        <div className="form-group">
                            <input type="text" name="name" id="name" placeholder="Your Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" id="email" placeholder="Your Email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="mobile" id="mobile" placeholder="Your Mobile" className="form-control" />
                        </div>
                        <div className="form-group">
                            <textarea type="text" name="desc" id="desc" placeholder="Your Message" className="form-control" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-outline-success btn-block">Submit</button>
                        </div>
                    </form>
                </div>
            </div>    
        </section>
    )
}
