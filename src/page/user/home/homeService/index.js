import { Col, Row } from "antd";
import { NavLink } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';

function HomeService(){
  return(
    <div className="service__area">
      <div className="container">
        <div className="service__title">
          <h1 className="title__h1"><span className="colorB">OUR</span> SERVICES </h1>
          <p className="title__p">We Provide Faster Service </p>
        </div>
        <Row >
          <Col span={6}>
            <div className="service__item">
              <NavLink to="/"> 
                
                <i className="bi bi-snow3 colorB"></i>
                <div className="service__item__content">
                  <h2 className="name">Air Conditionninds</h2>
                  <p className="content">aaaaaaa</p>
                  
                </div>
                <span className="colorB service__item__number">01</span>
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
  )
}
export default HomeService;