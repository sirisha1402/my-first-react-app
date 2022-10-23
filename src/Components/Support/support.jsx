import React from "react";
import "./support.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Support = ()=>{
    return (
      <>
        <section class="wr">

<div class="support">
   <div className="container-fluid">
   <div className="row">
    <div class="col-md-6 col-sm-6 col-xs-12 pd-zero div1 ">
        <h3 class="white support_head">Fresh Investment Solutions!</h3>
        <ul class="marked-list white">
            <li className="support_para">Dolor sit amet, consectetur adipisicing</li>
            <li className="support_para">Sed do eiusmod tempor incididunt ut labore</li>
            <li className="support_para">Et dolore magna aliquat enim ad minim veniam</li>
            <li className="support_para">Duis nostrud exercitation ullamco laboris</li>
            <li className="support_para">Ex ea commodo consequat</li>
            </ul>
            <a href="#" class="learn-more">Learn More</a>
    </div>

    <div class="col-lg-6 col-md-5 col-sm-6 col-sm-offset-0  col-xs-12 pd-zero div2">
        <h3 class="white support_head">Learning to Save Money</h3>
        <ul class="marked-list">

            <li className="support_para2">Lorem ipsum dolor sit amet, consectetur adipisicing</li>
            <li className="support_para2">Sed do eiusmod tempor incididunt ut labore</li>
            <li className="support_para2">Ut enim ad minim veniam quis nostrud exercitation</li>
        <p className="support_para2">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip. </p>
        </ul>
            <a href="#" class="learn-more">Learn More</a>
    </div>
    </div>
   </div>
</div>
</section>
<section class="brands">
            <div class="container">
                <div class="brand-list">
                    <div class="item">
                        <a href="#"><img src="https://livedemo00.template-help.com/wt_55458/images/page-1_img18.jpg" alt=""/></a>
                    </div>
                    <div class="item">
                        <a href="#"><img src="https://livedemo00.template-help.com/wt_55458/images/page-1_img19.jpg" alt=""/></a>
                    </div>
                    <div class="item">
                        <a href="#"><img src="https://livedemo00.template-help.com/wt_55458/images/page-1_img20.jpg" alt=""/></a>
                    </div>
                    <div class="item">
                        <a href="#"><img src="https://livedemo00.template-help.com/wt_55458/images/page-1_img21.jpg" alt=""/></a>
                    </div>
                    <div class="item">
                        <a href="#"><img src="https://livedemo00.template-help.com/wt_55458/images/page-1_img22.jpg" alt=""/></a>
                    </div>
                    <div class="item">
                        <a href="#"><img src="https://livedemo00.template-help.com/wt_55458/images/page-1_img23.jpg" alt=""/></a>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
}