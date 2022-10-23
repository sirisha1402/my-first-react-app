import React from "react";
import {Test} from "./Test"
import "./services.css"

export const Services = ()=>{
    return(
        <>
        <section className="services">
            <div className="container">
                <div>
                    <h2 className="services_head">Advice on how to make wise investments</h2>

                    <p className="para_head">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip </p>
                </div>
                <div className="row">
                    <Test/>
                </div>
            </div>
        </section>
        </>
    )
}