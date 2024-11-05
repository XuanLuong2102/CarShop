import { Button, Col, Row } from "antd";
import "./style.scss";
import banner1 from "../../../component/img/banner-1.jpg";

function Home(){
  return(
    <>
    <div className="banner">
      <img src={banner1} alt="banner"/>
      <div className="banner__caption">
        <div className="banner__content container">
          <h1>BEST PLACE FOR SELL CAR</h1>
          <p>This Is Car Dealer website template </p>
        </div>
      </div>
    </div>
    <div className="search-area">
      <div className="container">
        <div className="search-content">
          <form>
            <Row>
              <Col span={6}>
                <div className="brand select">
                  Select Brand
                </div>
              </Col>
              <Col span={6}>
                <div className="category select">
                  Select Category
                </div>
              </Col>
              <Col span={6}>
                <div className="year select">
                  Select Year
                </div>
              </Col>
              <Col span={6}>
                <div className="location select">
                  Select Location
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <div className="transimission select">
                  Select Transimission 
                </div>
              </Col>
              <Col span={6}>
                <div className="body select">
                  Select Body 
                </div>
              </Col>
              <Col span={6}>
                <div className="body select">
                  Select Body 
                </div>
              </Col>
              <Col span={6}>
                <Button type="primary" className="search">Search</Button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
export default Home;