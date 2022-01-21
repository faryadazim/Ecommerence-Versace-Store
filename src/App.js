import "./App.css";
import Nav from "./components/Nav/Nav";
import HeroSection from "./components/Others/HeroSection";
import GiftFinder from "./components/Others/GiftFinder";
import ShopCollection from "./components/Shop/ShopCollection";



function App() {
  return (
    <div className="pb-5 mb-5">
      <Nav />
      <HeroSection />
      <GiftFinder />
      <ShopCollection />
    </div>
  );
}

export default App;
