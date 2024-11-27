import './style.scss'
import React from 'react'
import { Button, Col, Row, Select } from "antd";
import { CiSearch } from "react-icons/ci";
import { FaGasPump } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { SiGoogleearthengine } from "react-icons/si";
import { Option } from 'antd/es/mentions';
import { BsCurrencyDollar } from "react-icons/bs";
// import { GrFormPrevious } from "react-icons/gr";
// import { GrFormNext } from "react-icons/gr";
import { Pagination } from 'antd';
const items = [
    {
        label: "Audi",
        key: '0',
    },
    {
        label: "Mescedes",
        key: '1',
    },
    {
        label: "Ferrari",
        key: '2',
    },
    {
        label: "Honda",
        key: '3',
    },
];

function CarList() {
    return (
        <>
            <div className='body'>
                <div className='container'>
                    <Row className='search_bar'>

                        <Col className='filter-group' span={4}>

                            <label htmlFor="Select Brand">Select Brand</label>
                            <select name="" id="" placeholder='nghia' defaultValue={0} >
                                <option >SELECT</option>
                                
                                {items.map((item)=>(<option key={item.key}>{item.label}</option>))}
                            </select>

                        </Col>
                        <hr />
                        <Col className='filter-group' span={4}>

                            <label htmlFor="Select Model">Select Model</label>
                            <select name="" id="">
                                <option value="">SUV</option>
                                <option value="">Sedan</option>
                                <option value="">Coupe</option>
                                <option value="">Convertible</option>
                            </select>


                        </Col>
                        <hr />
                        <Col className='filter-group' span={4}>

                            <label htmlFor="Select Color">Select Color</label>
                            <select name="" id="" >
                                <option value="">Red</option>
                                <option value="">Pink</option>
                                <option value="">Orange</option>
                                <option value="">Yellow</option>
                            </select>

                        </Col>
                        <hr />
                        <Col span={4}>
                            <Button className='more-filters'>More Filter</Button>
                        </Col>
                        <hr />
                        <Col span={4}>
                            <Button className='search-button more-filters'>
                                <div className='search-icon'>
                                    <CiSearch />
                                    <h5>Search</h5>
                                </div>
                            </Button>
                        </Col>

                        <Col>
                        </Col>
                    </Row>

                </div>

                {/* </div> */}
                {/* </div>
            </div> */}
                <div className='page-boxcar'>
                    <div className='boxcar-container'>
                        <Row>
                            <div className='boxcar-title'>
                                <div className='breadcrumb'>
                                    <ul >
                                        <li>
                                            <a href="/">Home</a>
                                            {/* <span>Home</span> */}
                                        </li>
                                        <li>
                                            <a href="/"><span>Car List</span></a>
                                            {/* <span>Car List</span> */}
                                        </li>
                                    </ul>
                                </div>
                                <h2 className='title'>New and Used Cars For Sale</h2>
                            </div>
                        </Row>
                        {/* Card carlist */}

                        <Row className='text-box'>
                            <Col span={18} >
                                <label htmlFor="" className='text'>Show 1 to 16 of 1599 vehicles</label>
                            </Col>
                            <Col span={6} className='form-sort'>
                                <label htmlFor="">Sort</label>
                                {
                                    <Select className='sort'>
                                        {items.map((item) => (
                                            <Option key={item.key} className='sort__item'>{item.label}</Option>
                                        ))}
                                    </Select>
                                }
                            </Col>
                        </Row>
                        {/* car list */}
                        <div className='car__area'>
                            <div className=' car__list'>
                                <div className='car__item'>
                                    <img src='https://boxcar-nextjs.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fshop3-2.jpg&w=384&q=75' alt='car__img' />
                                    <div className='car__item__content'>
                                        <div className='car__item__name'>
                                            Mercedes-Benz, C Class
                                        </div>
                                        <div className='car__item__group'>
                                            <div className='car__car__item__group__icon'><FaGasPump /><div className='car__car__item__group__icon__name'>Disel</div></div>
                                            <div className='car__car__item__group__icon'><IoSpeedometerOutline /><div className='car__car__item__group__icon__name'>124 mph</div></div>
                                            <div className='car__car__item__group__icon'><SiGoogleearthengine /><div className='car__car__item__group__icon__name'>Automatic</div></div>
                                        </div>
                                        <div>
                                            <Row className='car__item__recent'>
                                                <Col className='car__item__recent__price' span={16}>
                                                    <BsCurrencyDollar className='car__item__recent__price__icon' />25000
                                                </Col>
                                                <Col className='car__item__recent__detail' span={8}>
                                                    <a href="" className='car__item__recent__detail__link'>Detail View</a>
                                                </Col>
                                            </Row>
                                        </div>

                                    </div>
                                </div>
                                <div className='car__item'>
                                    <img src='https://boxcar-nextjs.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fshop3-2.jpg&w=384&q=75' alt='car__img' />
                                    <div className='car__item__content'>
                                        <div className='car__item__name'>
                                            Mercedes-Benz, C Class
                                        </div>
                                        <div className='car__item__group'>
                                            <div className='car__car__item__group__icon'><FaGasPump /><div className='car__car__item__group__icon__name'>Disel</div></div>
                                            <div className='car__car__item__group__icon'><IoSpeedometerOutline /><div className='car__car__item__group__icon__name'>124 mph</div></div>
                                            <div className='car__car__item__group__icon'><SiGoogleearthengine /><div className='car__car__item__group__icon__name'>Automatic</div></div>
                                        </div>
                                        <div>
                                            <Row className='car__item__recent'>
                                                <Col className='car__item__recent__price' span={16}>
                                                    <BsCurrencyDollar className='car__item__recent__price__icon' />25000
                                                </Col>
                                                <Col className='car__item__recent__detail' span={8}>
                                                    <a href="" className='car__item__recent__detail__link'>Detail View</a>
                                                </Col>
                                            </Row>
                                        </div>

                                    </div>
                                </div>
                                <div className='car__item'>
                                    <img src='https://boxcar-nextjs.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fshop3-2.jpg&w=384&q=75' alt='car__img' />
                                    <div className='car__item__content'>
                                        <div className='car__item__name'>
                                            Mercedes-Benz, C Class
                                        </div>
                                        <div className='car__item__group'>
                                            <div className='car__car__item__group__icon'><FaGasPump /><div className='car__car__item__group__icon__name'>Disel</div></div>
                                            <div className='car__car__item__group__icon'><IoSpeedometerOutline /><div className='car__car__item__group__icon__name'>124 mph</div></div>
                                            <div className='car__car__item__group__icon'><SiGoogleearthengine /><div className='car__car__item__group__icon__name'>Automatic</div></div>
                                        </div>
                                        <div>
                                            <Row className='car__item__recent'>
                                                <Col className='car__item__recent__price' span={16}>
                                                    <BsCurrencyDollar className='car__item__recent__price__icon' />25000
                                                </Col>
                                                <Col className='car__item__recent__detail' span={8}>
                                                    <a href="" className='car__item__recent__detail__link'>Detail View</a>
                                                </Col>
                                            </Row>
                                        </div>

                                    </div>
                                </div>
                                <div className='car__item'>
                                    <img src='https://boxcar-nextjs.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fshop3-2.jpg&w=384&q=75' alt='car__img' />
                                    <div className='car__item__content'>
                                        <div className='car__item__name'>
                                            Mercedes-Benz, C Class
                                        </div>
                                        <div className='car__item__group'>
                                            <div className='car__car__item__group__icon'><FaGasPump /><div className='car__car__item__group__icon__name'>Disel</div></div>
                                            <div className='car__car__item__group__icon'><IoSpeedometerOutline /><div className='car__car__item__group__icon__name'>124 mph</div></div>
                                            <div className='car__car__item__group__icon'><SiGoogleearthengine /><div className='car__car__item__group__icon__name'>Automatic</div></div>
                                        </div>
                                        <div>
                                            <Row className='car__item__recent'>
                                                <Col className='car__item__recent__price' span={16}>
                                                    <BsCurrencyDollar className='car__item__recent__price__icon' />25000
                                                </Col>
                                                <Col className='car__item__recent__detail' span={8}>
                                                    <a href="" className='car__item__recent__detail__link'>Detail View</a>
                                                </Col>
                                            </Row>
                                        </div>

                                    </div>
                                </div>
                                <div className='car__item'>
                                    <img src='https://boxcar-nextjs.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fshop3-2.jpg&w=384&q=75' alt='car__img' />
                                    <div className='car__item__content'>
                                        <div className='car__item__name'>
                                            Mercedes-Benz, C Class
                                        </div>
                                        <div className='car__item__group'>
                                            <div className='car__car__item__group__icon'><FaGasPump /><div className='car__car__item__group__icon__name'>Disel</div></div>
                                            <div className='car__car__item__group__icon'><IoSpeedometerOutline /><div className='car__car__item__group__icon__name'>124 mph</div></div>
                                            <div className='car__car__item__group__icon'><SiGoogleearthengine /><div className='car__car__item__group__icon__name'>Automatic</div></div>
                                        </div>
                                        <div>
                                            <Row className='car__item__recent'>
                                                <Col className='car__item__recent__price' span={16}>
                                                    <BsCurrencyDollar className='car__item__recent__price__icon' />25000
                                                </Col>
                                                <Col className='car__item__recent__detail' span={8}>
                                                    <a href="" className='car__item__recent__detail__link'>Detail View</a>
                                                </Col>
                                            </Row>
                                        </div>

                                    </div>
                                </div>
                                <div className='car__item'>
                                    <img src='https://boxcar-nextjs.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fshop3-2.jpg&w=384&q=75' alt='car__img' />
                                    <div className='car__item__content'>
                                        <div className='car__item__name'>
                                            Mercedes-Benz, C Class
                                        </div>
                                        <div className='car__item__group'>
                                            <div className='car__car__item__group__icon'><FaGasPump /><div className='car__car__item__group__icon__name'>Disel</div></div>
                                            <div className='car__car__item__group__icon'><IoSpeedometerOutline /><div className='car__car__item__group__icon__name'>124 mph</div></div>
                                            <div className='car__car__item__group__icon'><SiGoogleearthengine /><div className='car__car__item__group__icon__name'>Automatic</div></div>
                                        </div>
                                        <div>
                                            <Row className='car__item__recent'>
                                                <Col className='car__item__recent__price' span={16}>
                                                    <BsCurrencyDollar className='car__item__recent__price__icon' />25000
                                                </Col>
                                                <Col className='car__item__recent__detail' span={8}>
                                                    <a href="" className='car__item__recent__detail__link'>Detail View</a>
                                                </Col>
                                            </Row>
                                        </div>

                                    </div>
                                </div>
                                <div className='car__item'>
                                    <img src='https://boxcar-nextjs.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fshop3-2.jpg&w=384&q=75' alt='car__img' />
                                    <div className='car__item__content'>
                                        <div className='car__item__name'>
                                            Mercedes-Benz, C Class
                                        </div>
                                        <div className='car__item__group'>
                                            <div className='car__car__item__group__icon'><FaGasPump /><div className='car__car__item__group__icon__name'>Disel</div></div>
                                            <div className='car__car__item__group__icon'><IoSpeedometerOutline /><div className='car__car__item__group__icon__name'>124 mph</div></div>
                                            <div className='car__car__item__group__icon'><SiGoogleearthengine /><div className='car__car__item__group__icon__name'>Automatic</div></div>
                                        </div>
                                        <div>
                                            <Row className='car__item__recent'>
                                                <Col className='car__item__recent__price' span={16}>
                                                    <BsCurrencyDollar className='car__item__recent__price__icon' />25000
                                                </Col>
                                                <Col className='car__item__recent__detail' span={8}>
                                                    <a href="" className='car__item__recent__detail__link'>Detail View</a>
                                                </Col>
                                            </Row>
                                        </div>

                                    </div>
                                </div>
                                <div className='car__item'>
                                    <img src='https://boxcar-nextjs.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fshop3-2.jpg&w=384&q=75' alt='car__img' />
                                    <div className='car__item__content'>
                                        <div className='car__item__name'>
                                            Mercedes-Benz, C Class
                                        </div>
                                        <div className='car__item__group'>
                                            <div className='car__car__item__group__icon'><FaGasPump /><div className='car__car__item__group__icon__name'>Disel</div></div>
                                            <div className='car__car__item__group__icon'><IoSpeedometerOutline /><div className='car__car__item__group__icon__name'>124 mph</div></div>
                                            <div className='car__car__item__group__icon'><SiGoogleearthengine /><div className='car__car__item__group__icon__name'>Automatic</div></div>
                                        </div>
                                        <div>
                                            <Row className='car__item__recent'>
                                                <Col className='car__item__recent__price' span={16}>
                                                    <BsCurrencyDollar className='car__item__recent__price__icon' />25000
                                                </Col>
                                                <Col className='car__item__recent__detail' span={8}>
                                                    <a href="" className='car__item__recent__detail__link'>Detail View</a>
                                                </Col>
                                            </Row>
                                        </div>

                                    </div>
                                </div>
                                <div className='car__item'>
                                    <img src='https://boxcar-nextjs.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fshop3-2.jpg&w=384&q=75' alt='car__img' />
                                    <div className='car__item__content'>
                                        <div className='car__item__name'>
                                            Mercedes-Benz, C Class
                                        </div>
                                        <div className='car__item__group'>
                                            <div className='car__car__item__group__icon'><FaGasPump /><div className='car__car__item__group__icon__name'>Disel</div></div>
                                            <div className='car__car__item__group__icon'><IoSpeedometerOutline /><div className='car__car__item__group__icon__name'>124 mph</div></div>
                                            <div className='car__car__item__group__icon'><SiGoogleearthengine /><div className='car__car__item__group__icon__name'>Automatic</div></div>
                                        </div>
                                        <div>
                                            <Row className='car__item__recent'>
                                                <Col className='car__item__recent__price' span={16}>
                                                   $ 25000
                                                </Col>
                                                <Col className='car__item__recent__detail' span={8}>
                                                    <a href="" className='car__item__recent__detail__link'>Detail View</a>
                                                </Col>
                                            </Row>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pagiantion'>
                            <Pagination defaultCurrent={1} align="center" total={50} defaultPageSize={6} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CarList