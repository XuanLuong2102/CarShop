import "./style.scss";
import banner1 from "../../../component/img/banner-1.jpg";
import FeaturedVehicle from "./homeFeaturedVehicle";
import HomeSearch from "./homeSearch";
import HomeService from "./homeService";


function Home(){
  return(
    <>
    <div className="banner">
      <img src={banner1} alt="banner"/>
      <div className="banner__caption">
        <div className="banner__content container">
          <h1>BEST PLACE FOR SELL CAR</h1>
          <p className="colorW">This Is Car Dealer website template </p>
        </div>
      </div>
    </div>
    <HomeSearch />
    <FeaturedVehicle />
    <HomeService />
    
    </>
  )
}
export default Home;