import CatMenu from "../Components/CatMenu"
import Menubar from "../Components/Menubar"
import BestSell from './../Components/BestSell';
import BestFarmer from './../Components/BestFarmer';
import CusReports from "../Components/CusReports";


function Home() {
  return (
    <div className="Home">
        <Menubar />
        <CatMenu />
        <BestSell />
        <BestFarmer />
        <CusReports />
    </div>
  )
}

export default Home