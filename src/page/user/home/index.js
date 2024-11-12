import "./style.scss";
import FeaturedVehicle from "./homeFeaturedVehicle";
import HomeSearch from "./homeSearch";
import HomeService from "./homeService";
import HomeRecent from "./homeRecent";
import HomeBanner from "./homeBanner";

function Home(){
  return(
    <>
    <HomeBanner />
    <HomeSearch />
    <FeaturedVehicle />
    <HomeService />
    <HomeRecent />
    </>
  )
}
export default Home;