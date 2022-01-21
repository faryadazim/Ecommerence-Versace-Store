import "./App.css";
import Nav from "./components/Nav/Nav";
import HeroSection from "./components/Others/HeroSection";
import GiftFinder from "./components/Others/GiftFinder";

import product_1 from './assets/collections/Shop/product_1.webp'
import product_2 from './assets/collections/Shop/product_2.webp'
import product_3 from './assets/collections/Shop/product_3.webp'
import product_4 from './assets/collections/Shop/product_4.webp'


function App() {
  return (
    <div className="pb-5 mb-5">
      <Nav />
      <HeroSection />
      <GiftFinder />
      <div className="ShopNow mt-5">
        <h2 className="text-center mb-3"> SHOP THE COLLECTION</h2>
        <div className="container-fluid px-4">
          <div className="row px-2">

            <div className="col-md-3  ">
              <div className="mx-1 ">
                <div className="poduct-item">
                  <img src={product_1} alt="product_1" width="100%" />
                  <p className="mt-3 mb-1">BELTED DRESS</p>
                  <p style={{ letterSpacing: "0.45px" }}>Rs 537,100</p>
                </div>
              </div>
            </div>
            <div className="col-md-3  ">
              <div className="mx-1 ">
                <div className="poduct-item">
                  <img src={product_2} alt="product_2" width="100%" />
                  <p className="mt-3 mb-1">LA MEDUSA SMALL HABO BAG</p>
                  <p style={{ letterSpacing: "0.45px" }}>Rs 353,400</p>
                </div>
              </div>
            </div>
            <div className="col-md-3  ">
              <div className="mx-1 ">
                <div className="poduct-item">
                  <img src={product_3} alt="product_3" width="100%" />
                  <p className="mt-3 mb-1">MEDUSA CHAIN PUMPS</p>
                  <p style={{ letterSpacing: "0.45px" }}>Rs 240,300</p>
                </div>
              </div>
            </div>

            <div className="col-md-3  ">
              <div className="mx-1  ">
                <div className="poduct-item">
                  <img src={product_4} alt="product_4" width="100%" />
                  <p className="mt-3 mb-1">LA MEDUSA CHAIN BELT DRESS</p>
                  <p style={{ letterSpacing: "0.45px" }}>Rs 195,100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
