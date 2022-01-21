import "./App.css";
import Nav from "./components/Nav/Nav";
import HeroSection from "./components/Others/HeroSection";
import GiftFinder from "./components/Others/GiftFinder";

import product_1 from './assets/collections/Shop/product_1.webp'


function App() {
  return (
    <div className="pb-5 mb-5">
      <Nav />
      <HeroSection />
      <GiftFinder />
      <div className="ShopNow mt-5">
        <h2 className="text-center"> SHOP THE COLLECTION</h2>
        <div className="container-fluid px-4">
          <div className="row px-2">
            <div className="col-md-3  ">
              <div className="mx-2 bg-warning">  <div className="px-2">
                <img src={product_1} alt="product_1" /></div>
              </div>
            </div>
            <div className="col-md-3  ">
              <div className="mx-2 bg-danger">  <div className="px-2">
                <img src={product_1} alt="product_1" /></div>
              </div>
            </div>
            <div className="col-md-3  ">
              <div className="mx-2 bg-secondary text-light">  <div className="px-2">
                <img src={product_1} alt="product_1" /></div>
              </div>
            </div>
            <div className="col-md-3  ">
              <div className="mx-2 bg-primary">
                <div className="px-2">
                  <img src={product_1} alt="product_1" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
