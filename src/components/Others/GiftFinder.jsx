import React from 'react';
import './GiftFinder.css'

import Video from '../../assets/Versace Official Online Store _ Fashion Clothing & Accessories.mp4'
const GiftFinder = () => {
    return <>
        <div className="giftFinder   container px-4 mt-10">
            <div className="row">
                <div className="col-md-4 GiftGame mt-auto mb-2">
                    <h2>

                        THE VALENTINE GIFT FINDER
                    </h2>
                    <p>
                        Swipe to choose your favorite Versace styles in our Valentine Gift Finder game, and we'll curate an inspiring selection of gifts just for you.
                    </p>
                    <button className=" btn btn-outline-dark  btn-specie-gift">
                        PLAY NOW
                    </button>
                </div>
                <div className="col-md-8  px-0  GiftZoneVideo   mt-auto">
                    <video autoPlay loop width="85%" height="95%"   >

                        <source src={Video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </>;
};

export default GiftFinder;
