import React from "react";
import './home.css';

export const Home =()=>{
    return(
    <>
 <div className="container-fluid p-0">
  <div className="carousel">
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://livedemo00.template-help.com/wt_55458/images/page-1_slide01.jpg?1666273535363" alt="First slide"/>
     <div class="carousel-caption d-none d-md-block boxed">
     <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
    <h1 className="text-head m-auto">WELCOME TO THE FINANCIAL ZONE</h1>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://livedemo00.template-help.com/wt_55458/images/page-1_slide02.jpg?1666273535363" alt="Second slide"/>
     <div class="carousel-caption d-none d-md-block boxed">
     <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
    <h1 className="text-head m-auto">WELCOME TO THE FINANCIAL ZONE</h1>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://livedemo00.template-help.com/wt_55458/images/page-1_slide03.jpg?1666273535363" alt="Third slide"/>
     <div class="carousel-caption d-none d-md-block boxed">
     <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
    <h1 className="text-head m-auto">WELCOME TO THE FINANCIAL ZONE</h1>
  </div>
    </div>
 
  </div>
 
</div>
  </div>
      </div>
     </>
    );
}