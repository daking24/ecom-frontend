import CatMenu from "../Components/CatMenu"
import Menubar from "../Components/Menubar"
import BestSell from './../Components/BestSell';
import BestFarmer from './../Components/BestFarmer';
import CusReports from "../Components/CusReports";
import Section from "../Components/Section";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";


function Home() {
  return (
    <div className="Home">
        <Menubar />
        <CatMenu />
        <BestSell />
        <BestFarmer />
        <CusReports />
        <Section />
        <Blog />
        <Footer />
    </div>
  )
}

export default Home