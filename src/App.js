import "./App.css";
import Nav from "./components/Nav/Nav";
import HeroSection from "./components/Others/HeroSection";
import GiftFinder from "./components/Others/GiftFinder";
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
              <div className="mx-2 bg-warning">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquid, saepe commodi culpa tempore, atque enim eaque dolor laudantium illum fuga sit reprehenderit eligendi autem assumenda officia hic excepturi dignissimos.
              </div>
            </div>
            <div className="col-md-3  ">
              <div className="mx-2 bg-danger">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquid, saepe commodi culpa tempore, atque enim eaque dolor laudantium illum fuga sit reprehenderit eligendi autem assumenda officia hic excepturi dignissimos.
              </div>
            </div>
            <div className="col-md-3  ">
              <div className="mx-2 bg-secondary text-light">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquid, saepe commodi culpa tempore, atque enim eaque dolor laudantium illum fuga sit reprehenderit eligendi autem assumenda officia hic excepturi dignissimos.
              </div>
            </div>
            <div className="col-md-3  ">
              <div className="mx-2 bg-primary">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquid, saepe commodi culpa tempore, atque enim eaque dolor laudantium illum fuga sit reprehenderit eligendi autem assumenda officia hic excepturi dignissimos.
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
