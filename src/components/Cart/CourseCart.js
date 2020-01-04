import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from 'gatsby-image'

export default class  extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: props.courses.edges,
            mycourses: props.courses.edges,
        
        }
    }
    render() {
        console.log(this.state.bundles)

        return (
            <section className="py-5 bg-theme">
               <div className="container">
                <Heading title="Course" />
                <div className="row">
                    {this.state.mycourses.map(({node}) => {
                        return(
                            <div
                                key={node.id}
                                className="col-11 col-md-6 d-flex my-3 mx-auto"
                            >
                                <Img fixed={node.image.fixed} />
                                <div className="flex-grow-1 px-3">
                                    <div className="d-flex">
                                        <h4 className="mb-0 text-white">{node.title}</h4>
                                        
                                    </div>
                                    <p classname="text-muted">
                                        <small className="text-white">{node.description.description}</small>
                                        <h5 className="mb-0 text-success">$ {node.price}</h5>
                                    </p>
                                    
                                    <button  
                                        data-item-id={node.id}
                                        data-item-price={node.price}
                                        data-item-url="https://learncodeonline.in"
                                        //data-item-description={node.description}
                                        data-item-image={node.image.fixed.src}
                                        data-item-name={node.title}
                                        className="btn btn-primary snipcart-add-item"
                                    >Join Now</button>
                                </div>
                            </div>
                       
                        )
                    })

                    }
                </div> 
               </div>
            </section>
        )
    }
}
