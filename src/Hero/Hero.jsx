import React from "react";
import "./style.css";
import HeroimageUser from "../images/herorightuser.png";
import rightInfo from "../images/herorightinfoo.png";
import registerstatus from "../images/nibondonstatus.png";
import vaccinecard from '../images/vaccinecard.png';
import certificate from '../images/certificate.png';
import faq from '../images/faq.png';





const Hero = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="hero-left col-md-5 col-sm-12 py-5">
              <div className="card-right">
                <img src={HeroimageUser} className="img-fluid" />
                <h4>ভ্যাকসিনের জন্য নিবন্ধন করুন</h4>
              </div>
                <h5>নিবন্ধনের সময় প্রয়োজন হবে</h5>
                <img src={rightInfo}  />
            </div>

            <div className="hero-right col-md-5 col-sm-12 py-5">
              <div className="singlecard">
                <img src={registerstatus} className="img-fluid" />
                <h4>নিবন্ধন স্ট্যাটাস</h4>
              </div>
              <div className="singlecard">
                <img src={vaccinecard} className="img-fluid" />
                <h4>টিকা কার্ড সংগ্রহ</h4>
              </div>
              <div className="singlecard">
                <img src={certificate} className="img-fluid" />
                <h4>টিকা সনদ সংগ্রহ</h4>
              </div>
              <div className="singlecard">
                <img src={faq} className="img-fluid" />
                <h4>সচরাচর জিজ্ঞাসা</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
