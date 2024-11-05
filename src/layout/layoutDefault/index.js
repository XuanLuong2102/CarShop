import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button, Col, Row } from "antd";
import "./style.scss";

function LayoutDefault() {
  
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".layout-default__header");
      if (window.scrollY > 30) {
        header.classList.add("shrink");
        header.classList.remove("sticky");
      } else {
        header.classList.remove("shrink");
        header.classList.add("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="layout-default">
      <header className="layout-default__header sticky">
        <div className="container">
          <Row>
            <Col span={8}>
              <div className="logo">
                <NavLink to="/">Logo</NavLink>
              </div>
            </Col>
            <Col span={12}>
              <div className="menu">
                <ul>
                  <li>
                    <NavLink to="/">HOME</NavLink>
                  </li>
                  <li>
                    <NavLink to="/properties">VEHICLE</NavLink>
                  </li>
                  <li>
                    <NavLink to="/owner">OUR SERVICE</NavLink>
                  </li>
                  <li>
                    <NavLink to="/resident">ABOUT</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">CONTACT</NavLink>
                  </li>
                </ul>
              </div>
            </Col>
            <Col span={4}>
              <div className="account">
                <ul>
                  <li className="colorW">
                    <Button className="login colorW">
                      <NavLink to="/login">LOGIN</NavLink>
                    </Button>
                  </li>
                  <li>
                    <Button type="primary" className="colorW">
                      <NavLink to="/signup">SIGNUP</NavLink>
                    </Button>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </header>
      <main className="layout-default__main">
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutDefault;
