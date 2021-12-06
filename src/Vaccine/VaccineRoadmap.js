import React from 'react';
import './style.css';
import vroadmap1 from '../images/vaccineroadmap1.png'
import vroadmap2 from '../images/vaccineroadmap2.png'
import vroadmap3 from '../images/vaccineroadmap3.png'


const VaccineRoadmap = () => {
    return (
        <div className='vaccine-roadmap'>
            <h1><span></span> কোভিড-১৯ করোনা ভ্যাকসিন গ্রহণের প্রক্রিয়া</h1>
            <div className="roadmap_content">
            <div className="single-content">
                <img src={vroadmap1} alt="" />
                <h5><strong>অনলাইনে নিবন্ধন</strong></h5>
                <p>প্রথমে এই পোর্টালের মাধ্যমে জাতীয় পরিচয়পত্র ও সঠিক মোবাইল নম্বর যাচাইপূর্বক অনলাইনে নিবন্ধন সম্পন্ন করবেন।</p>
            </div>
            <div className="single-content">
                <img src={vroadmap2} alt="" />
                <h5><strong>SMS নোটিফিকেশন</strong></h5>
                <p>অনলাইনে নিবন্ধন পরবর্তী তথ্য যাচাইপূর্বক পর্যায়ক্রমে টিকা প্রদানের তারিখ ও কেন্দ্রের নাম উল্লেখপূর্বক মুঠোফোনে খুদেবার্তা পাবেন।</p>
            </div>
            <div className="single-content">
                <img src={vroadmap3} alt="" />
                <h5><strong>টিকা কেন্দ্রে টিকা গ্রহণ</strong></h5>
                <p>মুঠোফোনে খুদেবার্তা প্রাপ্তি সাপেক্ষে টিকাকার্ড জাতীয় পরিচয়পত্র ও সম্মতিপত্রসহ নির্দিষ্ট তারিখে টিকাদান কেন্দ্রে স্ব-শরীরে উপস্থিত হয়ে কোভিড-১৯ টিকা গ্রহণ করবেন।</p>
            </div>
            </div>
        </div>
    )
}

export default VaccineRoadmap
