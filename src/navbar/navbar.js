import React, { useState } from 'react';
import './navbar.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Tab, Tabs,ListGroup,Button,ButtonToolbar,ButtonGroup } from 'react-bootstrap';
import {Slider} from '@material-ui/core';
import Dropdown from './dropdown';
function Navbarc(params) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return <>
        <div className='nes'>
            <Link to='#' className='manu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' >
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </Link>
                </li>
                <div>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Chart" style={{backgroundColor:'#F6F6F6'}}>
                        <ButtonToolbar className='mx-1 my-1' aria-label="Toolbar with button groups">
                            <h6 className='my-2'>Future Wave(Years)</h6>
  <ButtonGroup className=" mx-4" aria-label="First group">

    <Button variant='secondary'>All</Button> <Button variant='light'>1</Button> <Button variant='light'>2</Button> <Button variant='light'>3</Button>
  </ButtonGroup>
</ButtonToolbar>
                            <div className='rangestyle'>
                                <h4>Year Range</h4>
                                <div style={{width:200,marginLeft:-0}}>
                                <Slider  max={200} min={100} />
                                </div>
                            </div>
                            <ListGroup horizontal>
                            <Form>
                                <Form.Label as="legend" column sm={2}>
                                    FILTER
                                </Form.Label>

                                <Col style={{width:170,backgroundColor:'white'}} >
                                    <Form.Check
                                        type="radio"
                                        checked={params.fill==='topic'}
                                        label="TOPIC"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        value='topic'
                                        onChange={params.handelstate}
                                    />
                                    <Dropdown type={'All'} />
                                    <br/>
                                    <Form.Check
                                        type="radio"
                                        checked={params.fill==='sector'}
                                        label="SECTOR"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        value='sector'
                                        onChange={params.handelstate}

                                    />
                                    <Dropdown type={'All'} />
                                    <br/>
                                    <Form.Check
                                        type="radio"
                                        label="REGION"
                                        checked={params.fill==='region'}
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                        value='region'
                                        onChange={params.handelstate}
                                    />
                                    <Dropdown type={'All'}/>
                                    <br/>
                                    <Form.Check
                                        type="radio"
                                        checked={params.fill==='pestle'}
                                        label="PEST"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios4"
                                        value='pestle'
                                        onChange={params.handelstate}
                                    />
                                    <Dropdown type={'All'}/>
                                    <br/>
                                    
                                </Col>

                            </Form>
                            <Form className='mx-5'>
    
                                <Col  sm={10}>
                                    <h6>MEASURE</h6>
                                    <Dropdown type={'Intensity'}/>
                                    <br/>
                                    <h6>SOURCE</h6>
                                    <Dropdown type={'All'}/>
                                    <br/>
                                    <h6>SWOT</h6>
                                    <Dropdown type={'All'}/>
                                    <br/>
                                    <h6>CONFIDENCE</h6>
                                    <Dropdown type={'95%'}/>
                                    <br/>
                                    
                                </Col>
                                

                            </Form>
                            
                            </ListGroup>
                            <ListGroup horizontal className='mx-1'>
                            <Button style={{width:150}} variant="warning">Save<FaIcons.FaSave /></Button>
                            
                            <Button style={{width:150}}  className='mx-4' variant="secondary">Evidence <IoIcons.IoNewspaperOutline/></Button>
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="profile" title="Quick Guide">
                            <h1>Quick Guide</h1>
                        </Tab>
                        <Tab eventKey="contact" title="Feedback">
                            <h1>Feedback</h1>
                        </Tab>
                    </Tabs>

                </div>
            </ul>
        </nav>
    </>
}
export default Navbarc