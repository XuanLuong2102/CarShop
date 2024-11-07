import { Carousel } from 'antd';
import "./style.scss";
import FeaturedVehicle from "./homeFeaturedVehicle";
import HomeSearch from "./homeSearch";
import HomeService from "./homeService";
import HomeRecent from "./homeRecent";
import banner1 from "../../../component/img/banner-1.jpg";
import img2 from "../../../component/img/car-list-2.jpg";
import img3 from "../../../component/img/car-list-3.jpg";


function Home(){
  return(
    <>
    <Carousel autoplay speed={2000} arrows >
      <div className="banner">
        <img src={banner1} alt="banner"/>
        <div className="banner__caption">
          <div className="banner__content container">
            <h1>BEST PLACE FOR SELL CAR 1</h1>
            <p className="colorW">This Is Car Dealer website template </p>
          </div>
        </div>
      </div>
      <div className="banner">
        <img src={img2} alt="banner"/>
        <div className="banner__caption">
          <div className="banner__content container">
            <h1>BEST PLACE FOR SELL CAR 2</h1>
            <p className="colorW">This Is Car Dealer website template </p>
          </div>
        </div>
      </div>
      <div className="banner">
        <img src={img3} alt="banner"/>
        <div className="banner__caption">
          <div className="banner__content container">
            <h1>BEST PLACE FOR SELL CAR 3</h1>
            <p className="colorW">This Is Car Dealer website template </p>
          </div>
        </div>
      </div>
    </Carousel>
    <HomeSearch />
    <FeaturedVehicle />
    <HomeService />
    <HomeRecent />
    </>
  )
}
export default Home;