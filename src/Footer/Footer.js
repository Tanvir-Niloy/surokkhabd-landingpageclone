import React from 'react';
import './style.css'
import surokkhabd from '../images/surokkhabd.svg';
import footerlogo1 from '../images/footerlogo1.png';
import footerlogo2 from '../images/footerlogo2.png';



const Footer = () => {
    return (
        <div className='footer'>
          <div className="container">
              <div className="row">
              <div className="col-md-3 mt-5">
                <img src={surokkhabd} alt="" />
            </div>
            <div className="col-md-3  mt-5">
                <ul>
                    <li><a href="#">জিজ্ঞাসা</a></li>
                    <li><a href="#">সহায়িকা</a></li>
                    <li><a href="#">প্রাইভেসি পলিসি</a></li>
                    <li><a href="#">টার্মস অফ সার্ভিসেস</a></li>
                    <li><a href="#">অন্যান্য সহযোগী প্রতিষ্ঠানসমূহ</a></li>
                </ul>
            </div>
             <div className="col-md-4 mt-5 text-white ">
                 <p>কারিগরি সহায়তায় - তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তর  </p>
                <img src={footerlogo1} alt="" />
            </div>
             <div className="col-md-2  mt-5 text-white">
                 <p>সহযোগী সংস্থাসমূহ - </p>
             <img src={footerlogo2} alt="" width='200px'/>               
            </div>
              </div>
          </div>
        </div>
    )
}

export default Footer
