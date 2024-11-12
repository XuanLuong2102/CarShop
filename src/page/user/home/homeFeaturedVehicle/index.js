import { Col, Row } from "antd";
import "./style.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { List_Car } from "./car_Item";
import 'bootstrap-icons/font/bootstrap-icons.css';

function FeaturedVehicle() {
  const [allState, setAllState] = useState(true);
  const [audiState, setAudiState] = useState(false);
  const [merState, setMerState] = useState(false);
  const [ferrState, setFerrState] = useState(false);

  const handleClick = (category) => {
    setAllState(category === "all");
    setAudiState(category === "audi");
    setMerState(category === "mercedes");
    setFerrState(category === "ferrari");
  };

  return (
  <div className="featured-vehicle__area">
    <div className="container">
      <div className="service__title">
        <h1 className="title__h1"><span className="colorB">FEATURED</span> VEHICLES</h1>
        <p className="title__p">Check out our featured vehicles</p>
      </div>
      <Row className="navigation">
        <Col span={5}>
          <p
            className={`navigation__item ${allState ? "active" : ""}`}
            onClick={() => handleClick("all")}
          >All</p>
        </Col>
        <Col span={5}>
          <p
            className={`navigation__item ${audiState ? "active" : ""}`}
            onClick={() => handleClick("audi")}
          >Audi</p>
        </Col>
        <Col span={5}>
          <p
            className={`navigation__item ${merState ? "active" : ""}`}
            onClick={() => handleClick("mercedes")}
          >Mercedes</p>
        </Col>
        <Col span={5}>
          <p
            className={`navigation__item ${ferrState ? "active" : ""}`}
            onClick={() => handleClick("ferrari")}
          >Ferrari</p>
        </Col>
      </Row>
      <div className="list__car">
          {List_Car.map((Car, index) => (
            <div className="car__box" key={index}>
              <NavLink to="/" className="car__box__img">
                <img src={Car.image} alt={Car.name} />
              </NavLink>
              <div className="car__box__overlay"></div>
              <div className="car__box__text">
                <h3>{Car.name}</h3>
                <ul className="facilities__list">
                  <li className="facilities__item">
                    <i className="bi bi-car-front"></i>
                    {Car.categorys}
                  </li>
                  <li className="facilities__item">
                    <i className="bi bi-speedometer2"></i>
                    17,000
                  </li>
                  <li className="facilities__item">
                    <i className="bi bi-fuel-pump-fill"></i>
                    {Car.enegry}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
    </div>
  </div>
  );
}

export default FeaturedVehicle;
