import React from "react";
import "../Navbar/navbar.css"

export const  Navbar = ()=>{
  return(
    <>
      <div className="container-fluid fixed-top navbg">
        <div className="row" id="navbar">
          <div className="col-lg-1 col-12"></div>
          <div className="col-lg-2 col-12 logo">
            <div className="row" id="div">
              <div className="col-lg-3 m-auto"><img src="https://livedemo00.template-help.com/wt_55458/images/logo.png" alt="" /></div>
              <div className="col-lg-9 m-auto">
                <p className="head">Haber</p>
                <p className="sub-head">INVESTMENT COMPANY</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12  m-auto">
          <nav class="navbar navbar-expand-lg">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav m-auto">
      <li class="nav-item">
    
        <a class="nav-link" href="#">
          HOME</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ABOUT
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item drop-link" href="#">HISTORY</a>
          <a class="dropdown-item drop-link dropright" href="#">NEWS</a>
          <a class="dropdown-item drop-link" href="#">TESTIMONIALS</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">SERVICES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">PROJECTS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">OURBLOG</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACT</a>
      </li>
    </ul>
  </div>
</nav>
          </div>
          <div className="col-lg-3 col-12 m-auto">
          <ul class="inline-list m-auto">
                        <li><a href="#" class="fa fa-twitter-square"></a></li>
                        <li><a href="#" class="fa fa-youtube"></a></li>
                        <li><a href="#" class="fa fa-rss"></a></li>
                        <li><a href="#" class="fa fa-facebook-square"></a></li>
                        <li><a href="#" class="fa fa-google-plus-square"></a></li>
                    </ul>
          </div>
        </div>
      </div>
    </>
  );
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "90px";
    document.getElementById("div").style.height = "90px";
    document.getElementById("head").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.height = "120px";
    document.getElementById("div").style.height = "120px";
    document.getElementById("head").style.fontSize = "35px";
  }
}