import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav,NavDropdown,MenuItem,NavItem,Tab,Row,Col} from 'react-bootstrap';
import {ItemsTable} from "./input";
class Tags extends React.Component {

    render() {
        return (
            <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
                <Row className="clearfix">
                    <Col sm={12}>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="first">
                                ALL
                            </NavItem>
                            <NavItem eventKey="second">
                                Anime
                            </NavItem>
                            <NavItem eventKey="third">
                                Comics
                            </NavItem>
                            <NavItem eventKey="fourth">
                                Books
                            </NavItem>
                            <NavItem eventKey="fifth">
                                Done
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={12}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first">
                                <ItemsTable length={this.props.length} name={this.props.name} ep={this.props.ep} link={this.props.link} category={this.props.category} exist={this.props.exist} thisCategory="all" changeItem={this.props.changeItem}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ItemsTable length={this.props.length} name={this.props.name} ep={this.props.ep} link={this.props.link} category={this.props.category} exist={this.props.exist} thisCategory="anime" changeItem={this.props.changeItem}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <ItemsTable length={this.props.length} name={this.props.name} ep={this.props.ep} link={this.props.link} category={this.props.category} exist={this.props.exist} thisCategory="comics" changeItem={this.props.changeItem}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <ItemsTable length={this.props.length} name={this.props.name} ep={this.props.ep} link={this.props.link} category={this.props.category} exist={this.props.exist} thisCategory="book" changeItem={this.props.changeItem}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <ItemsTable length={this.props.length} name={this.props.name} ep={this.props.ep} link={this.props.link} category={this.props.category} exist={this.props.exist} thisCategory="none" changeItem={this.props.changeItem}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    };
}

export default Tags;
