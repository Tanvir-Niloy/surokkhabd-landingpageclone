import React from 'react';
import './style.css';
import hotline from '../images/hotline.png'

const HeroFooter = () => {
    return (
        <div className='herofooter'>
            <div className="herofooter-content">
                <img src={hotline} alt="" />
                <p>হটলাইন</p>
            </div>
            <div className="separator"></div>
            <div className="herofooter-content">
                <strong>৩৩৩</strong>
                <p>জাতীয় কল সেন্টার</p>
            </div>
            <div className="separator"></div>
            <div className="herofooter-content">
                <strong>১৬২৬৩</strong>
                <p>স্বাস্থ্য বাতায়ন</p>
            </div>
            <div className="separator"></div>
            <div className="herofooter-content">
                <strong>১০৬৫৫</strong>
                <p>আইইডিসিআর</p>
            </div>
            <div className="separator"></div>
            <div className="herofooter-content">
                <strong>০৯৬৬৬৭৭৭২২২</strong>
                <p>কোভিড-১৯ টেলিহেলথ</p>
            </div>
            <div className="separator"></div>
            <div className="herofooter-content">
            <img src={hotline} alt="" />
                <p>সকল কল সেন্টার</p>
            </div>
        </div>
    )
}

export default HeroFooter
