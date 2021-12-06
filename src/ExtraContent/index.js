import React from 'react';
import './style.css'
import playstore from '../images/playstore.png';
import mujib from '../images/mujib.png';
import applestore from '../images/applestore.png';


const ExtraContent = () => {
    return (
        <div className='extra-content fluid'>
            <div className="extra-content-header ">
                <h5><strong>অ্যাপ ডাউনলোড করুন</strong></h5>
                <img src={playstore} alt="" />
            </div>
           <div className="main-content">
            <h1><span></span> মুজিব ১০০</h1>
              <div className="content-card">
              <div className="single-content">
                <img src={mujib} alt="" style={{width:100}} />
                <a href='#'><strong>মুজিব ১০০ পোর্টাল</strong></a>
            </div>
            <div className="single-content">
                <img src={playstore} alt="" />
                <a href='#'><strong>মুজিব ১০০ অ্যান্ড্রয়েড অ্যাপ</strong></a>
            </div>
            <div className="single-content">
                <img src={applestore} alt="" />
                <a href='#'><strong>মুজিব ১০০ আইওএস অ্যাপ</strong></a>
            </div>
           </div>
              </div>
        </div>
    )
}

export default ExtraContent
