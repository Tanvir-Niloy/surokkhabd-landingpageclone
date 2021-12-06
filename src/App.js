import ExtraContent from "./ExtraContent";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import HeroFooter from "./Hero/HeroFooter";
import VaccineRoadmap from "./Vaccine/VaccineRoadmap";

function App() {
  return (
    <div>
     <Header/>
     <Hero/>
     <HeroFooter/>
     <VaccineRoadmap/>
     <ExtraContent/>
     <Footer/>
    </div>
  );
}

export default App;
