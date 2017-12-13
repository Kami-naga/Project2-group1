import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav,NavDropdown,MenuItem,Button} from 'react-bootstrap';
class Navibar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="http://kirarafantasia.com" target={"_blank"}>
                            name!
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <Button bsStyle="link" bsSize="large" eventKey={1} href="#">搜索</Button>
                        <NavDropdown eventKey={2} title="列表" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1} href="http://kirarafantasia.com" target={"_blank"}>新番</MenuItem>
                            <MenuItem eventKey={2.2} href="http://kirarafantasia.com" target={"_blank"}>漫画</MenuItem>
                            <MenuItem eventKey={2.3} href="http://kirarafantasia.com" target={"_blank"}>轻小说</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.4}>其他</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <Button bsStyle="link" bsSize="large" eventKey={1} href="http://kirarafantasia.com">登录</Button>
                        <Button bsStyle="link" bsSize="large" eventKey={2} href="http://kirarafantasia.com">注册</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navibar;
