import "./App.css";
import Nav from "./components/Nav/Nav";
import HeroSection from "./components/Others/HeroSection";
import GiftFinder from "./components/Others/GiftFinder";
import ShopCollection from "./components/Shop/ShopCollection";
import ShowOff from "./components/showOff/ShowOff";



function App() {
  return (
    <div className="pb-5 mb-5">
      <Nav />
      <HeroSection />
      <ShopCollection />
      <GiftFinder />
      <ShopCollection /> 
      <ShowOff/>

    </div>
  );
}

export default App;
