import { Button, Col, Row, Select } from "antd";
import { NavLink } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./style.scss";
import banner1 from "../../../component/img/banner-1.jpg";
import { brands, categorys, locations, transimissions, years, bodys } from "../../../component/item";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

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
    <div className="search-area">
      <div className="container">
        <div className="search-content">
          <form>
            <Row className="form_row" gutter={20}>
              <Col span={6}>
                <div className="brand select">
                  <Select
                    defaultValue="Select Brand"
                    onChange={handleChange}
                    options={brands}
                    className="select_item"
                  />
                </div>
              </Col>
              <Col span={6}>
                <div className="category select">
                  <Select
                    defaultValue="Select Category"
                    onChange={handleChange}
                    options={categorys}
                    className="select_item"
                  />
                </div>
              </Col>
              <Col span={6}>
                <div className="year select">
                  <Select
                    defaultValue="Select Year"
                    onChange={handleChange}
                    options={years}
                    className="select_item"
                  />
                </div>
              </Col>
              <Col span={6}>
                <div className="location select">
                  <Select
                    defaultValue="Select Location"
                    onChange={handleChange}
                    options={locations}
                    className="select_item"
                  />
                </div>
              </Col>
            </Row>
            <Row className="form_row" gutter={20}>
              <Col span={6}>
                <div className="transimission select">
                  <Select
                    defaultValue="Select Transimission"
                    onChange={handleChange}
                    options={transimissions}
                    className="select_item"
                  />
                </div>
              </Col>
              <Col span={6}>
                <div className="body select">
                  <Select
                    defaultValue="Select Body"
                    onChange={handleChange}
                    options={bodys}
                    className="select_item"
                  /> 
                </div>
              </Col>
              <Col span={6}>
                <div className="body select">
                  Select Body 
                </div>
              </Col>
              <Col span={6}>
                <Button type="primary" className="search">SEARCH</Button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
    <div className="service__area">
      <div className="container">
        <div className="service__title">
          <h1 className="title"><span className="colorB">OUR</span> SERVICES </h1>
          <p>We Provide Faster Service </p>
        </div>
        <Row >
          <Col span={6}>
            <div className="service__item">
              <NavLink to="/"> 
                <span className="colorB service__item__number">01</span>
                <i className="bi bi-snow3 colorB"></i>
                <div className="service__item__content">
                  <h2 className="name">Air Conditionninds</h2>
                  <p className="content">aaaaaaa</p>
                </div>
              </NavLink>
            </div>
          </Col>
          <Col span={6}>
            <div className="service__item">
              <NavLink to="/aaa"> 
                <span className="colorB service__item__number">02</span>
                <i class="bi bi-repeat colorB"></i>
                <div className="service__item__content">
                  <h2 className="name">Changes</h2>
                  <p className="content">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
                
              </NavLink>
            </div>
          </Col>
          <Col span={6}>
            <div className="service__item">
              <NavLink to="/"> 
                <span className="colorB service__item__number">03</span>
                <i class="bi bi-lock colorB"></i>
                <div className="service__item__content">
                  <h2 className="name">Security</h2>
                  <p className="content">aaaaaaa</p>
                </div>
              </NavLink>
            </div>
          </Col>
          <Col span={6}>
            <div className="service__item">
              <NavLink to="/"> 
                <span className="colorB service__item__number">04</span>
                <i class="bi bi-person-fill colorB"></i>
                <div className="service__item__content">
                  <h2 className="name">Free Support Anytime Oll</h2>
                  <p className="content">aaaaaaa</p>
                </div>
              </NavLink>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    </>
  )
}
export default Home;