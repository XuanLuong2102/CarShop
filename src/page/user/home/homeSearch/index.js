import { Button, Col, Row, Select } from "antd";
import { brands, categorys, locations, transimissions, years, bodys } from "../../../../component/item";

function HomeSearch(){
  return(
    <>
    <div className="search-area">
      <div className="container">
        <div className="search-content">
          <form>
            <Row className="form_row" gutter={20}>
              <Col span={6}>
                <div className="brand select">
                  <Select
                    defaultValue="Select Brand"
                    options={brands}
                    className="select_item"
                  />
                </div>
              </Col>
              <Col span={6}>
                <div className="category select">
                  <Select
                    defaultValue="Select Category"
                    options={categorys}
                    className="select_item"
                  />
                </div>
              </Col>
              <Col span={6}>
                <div className="year select">
                  <Select
                    defaultValue="Select Year"
                    options={years}
                    className="select_item"
                  />
                </div>
              </Col>
              <Col span={6}>
                <div className="location select">
                  <Select
                    defaultValue="Select Location"
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
                    options={transimissions}
                    className="select_item"
                  />
                </div>
              </Col>
              <Col span={6}>
                <div className="body select">
                  <Select
                    defaultValue="Select Body"
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
    </>
  )
}
export default HomeSearch;