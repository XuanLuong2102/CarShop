import { Col, Row } from "antd";
import { NavLink } from "react-router-dom"
import { TbSnowflake  } from "react-icons/tb";
import { MdOutlineChangeCircle } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";
import { useAnimateOnScroll } from "../../../../component/animate";

function HomeService(){

  useAnimateOnScroll({classname:"service", addClass:"animate-left", Scroll : 1200});
  useAnimateOnScroll({classname:"service__item__list", addClass:"animate-zoom", Scroll : 1300});

  return(
    <div className="service__area">
      <div className="container">
        <div className="service__title service">
          <h1 className="title__h1"><span className="colorB">OUR</span> SERVICES </h1>
          <p className="title__p">We Provide Faster Service </p>
        </div>
        <Row className="service__item__list">
          <Col span={6} className="service__item">
            <NavLink to="/">  
              <div className="icon colorB"><TbSnowflake /></div>
              <div className="service__item__content">
                <h2 className="name">Air Conditionninds</h2>
                <p className="content">aaaaaaa</p>          
              </div>
              <span className="colorB service__item__number">01</span>
            </NavLink>
          </Col>
          <Col span={6} className="service__item">
            <NavLink to="/aaa"> 
              <span className="colorB service__item__number">02</span>
              <div className="icon colorB"><MdOutlineChangeCircle /></div>     
              <div className="service__item__content">
                <h2 className="name">Changes</h2>
                <p className="content">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>        
            </NavLink>
          </Col>
          <Col span={6} className="service__item">
            <NavLink to="/"> 
              <span className="colorB service__item__number">03</span>
              <div className="icon colorB"><AiFillUnlock /></div>
              <div className="service__item__content">
                <h2 className="name">Security</h2>
                <p className="content">aaaaaaa</p>
              </div>
            </NavLink>
          </Col>
          <Col span={6} className="service__item">
            <NavLink to="/"> 
              <span className="colorB service__item__number">04</span>
              <div className="icon colorB"><IoIosPerson /></div>
              <div className="service__item__content">
                <h2 className="name">Free Support Anytime Oll</h2>
                <p className="content">aaaaaaa</p>
              </div>
            </NavLink>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default HomeService;