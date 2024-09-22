import React from 'react';
import './sellerhomecss.css';

const Banner = () => {
    return (
        <>
            <div>
                <a href={`${process.env.PUBLIC_URL}register.js`} target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/1.png`} alt="Banner" className="banner" />
                </a>
            </div>
            <div>
                <div>
                    <a href={`${process.env.PUBLIC_URL}/register.html`} target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/2.png`} alt="Banner" className="banner" />
                    </a>
                </div>
            </div>
        </>


    );
};

export default Banner;
