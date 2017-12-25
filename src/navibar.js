import React, { Component } from 'react';
import Title from './title'
import InputinfoInline from './input';
import List1 from './list1';
import List2 from './list2';
import List3 from './list3';
import {
    Link
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,NavDropdown,MenuItem,Button} from 'react-bootstrap';
class Navibar extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Welcome</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <Button bsStyle="link" bsSize="large" eventKey={1} href="#">搜索</Button>
                        <NavDropdown eventKey={2} title="列表" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1}  target={"_blank"}><Link to="/list1">list1</Link></MenuItem>
                            <MenuItem eventKey={2.2} target={"_blank"}><Link to="/list2">list2</Link></MenuItem>
                            <MenuItem eventKey={2.3} target={"_blank"}><Link to="/list3">list3</Link></MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.4}>其他</MenuItem>
                        </NavDropdown>

                        <li><Link to="/record">record</Link></li>
                    </Nav>
                    <Nav pullRight>
                        <Button bsStyle="link" bsSize="large" eventKey={1} >登录</Button>
                        <Button bsStyle="link" bsSize="large" eventKey={2} >注册</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
const title= () => (
    <Title/>
);
const record = () => (
    <InputinfoInline/>
);

const list1 = () => (
    <List1/>
);

const list2 = () => (
    <List2/>
);
const list3 = () => (
    <List3/>
);
export default Navibar;
