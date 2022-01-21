import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
    return <>
        <div className="banner " />
        <div className="my-4 heroSection">
            <h1 className="bannerHeight py-3">
                A hit of optimism
            </h1>
            <p>
                Discover the latest styles from Resort 2022, a collection designed for an optimistic new now.
            </p>
            <div className="bannerButton text-center">
                <button className="btn btn-outline-dark btn-specie-hover border-end-0">NOW FOR HER</button>
                <button className="btn btn-outline-dark btn-specie-hover">NOW FOR HIM</button>
            </div>
        </div>
    </>;
};

export default HeroSection;
