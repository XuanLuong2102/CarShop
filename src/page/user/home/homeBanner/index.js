import { Carousel } from 'antd';
import { useState } from 'react';
import banner1 from "../../../../component/img/banner-1.jpg";
import img2 from "../../../../component/img/car-list-2.jpg";
import img3 from "../../../../component/img/car-list-3.jpg";

function HomeBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (from, to) => {
    // Set the current slide to the one that will be active
    setCurrentSlide(to);
  };

  return (
    <Carousel autoplay autoplaySpeed={3000} speed={2000} arrows beforeChange={handleBeforeChange}
    >
      <div className="banner">
        <img src={banner1} alt="banner" />
        <div className="banner__caption">
          <div className="banner__content container">
            <h1 className={` ${currentSlide === 0 ? "animate-top" : ""}`}>
              BEST PLACE FOR SELL CAR 1
            </h1>
            <p className={`colorW  ${currentSlide === 0 ? "animate-bottom" : ""}`}>
              This Is Car Dealer website template
            </p>
          </div>
        </div>
      </div>
      <div className="banner">
        <img src={img2} alt="banner" />
        <div className="banner__caption">
          <div className="banner__content container">
            <h1 className={` ${currentSlide === 1 ? "animate-left" : ""}`}>
              BEST PLACE FOR SELL CAR 2
            </h1>
            <p className={`colorW  ${currentSlide === 1 ? "animate-bottom" : ""}`}>
              This Is Car Dealer website template
            </p>
          </div>
        </div>
      </div>
      <div className="banner">
        <img src={img3} alt="banner" />
        <div className="banner__caption">
          <div className="banner__content container">
            <h1 className={` ${currentSlide === 2 ? "animate-zoom" : ""}`}>
              BEST PLACE FOR SELL CAR 3
            </h1>
            <p className={`colorW  ${currentSlide === 2 ? "animate-bottom" : ""}`}>
              This Is Car Dealer website template
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default HomeBanner;
