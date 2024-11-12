import { Col, Row } from "antd";
import "./style.scss";
import { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { List_Car } from "./car_Item";
import 'bootstrap-icons/font/bootstrap-icons.css';

// Updated reducer function
const reducer = (state, action) => {
  console.log(state);
  switch (action) {
    case "all":
      return { ...state, ListCar: List_Car, state: "all" };
    case "audi":
      return {
        ...state,
        ListCar: List_Car.filter(car => car.band === "audi"),
        state: "audi",
      };
    case "mercedes":
      return {
        ...state,
        ListCar: List_Car.filter(car => car.band === "mercedes"),
        state: "mercedes",
      };
    case "ferrari":
      return {
        ...state,
        ListCar: List_Car.filter(car => car.band === "ferrari"),
        state: "ferrari",
      };
    default:
      return state;
  }
};

function FeaturedVehicle() {
  const initialState = { ListCar: List_Car, state: "all" };

  const [selectState, dispatch] = useReducer(reducer, initialState);

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
              className={`navigation__item ${selectState.state === "all" ? "active" : ""}`}
              onClick={() => dispatch("all" )}
            >All</p>
          </Col>
          <Col span={5}>
            <p
              className={`navigation__item ${selectState.state === "audi" ? "active" : ""}`}
              onClick={() => dispatch("audi" )}
            >Audi</p>
          </Col>
          <Col span={5}>
            <p
              className={`navigation__item ${selectState.state === "mercedes" ? "active" : ""}`}
              onClick={() => dispatch( "mercedes" )}
            >Mercedes</p>
          </Col>
          <Col span={5}>
            <p
              className={`navigation__item ${selectState.state === "ferrari" ? "active" : ""}`}
              onClick={() => dispatch("ferrari" )}
            >Ferrari</p>
          </Col>
        </Row>
        <div className="list__car">
          {selectState.ListCar.map((Car, index) => (
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
