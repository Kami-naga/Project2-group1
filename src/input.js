import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { Nav,NavDropdown,MenuItem,NavItem,Tab,Row} from 'react-bootstrap';
import { Button,ButtonToolbar,ButtonGroup} from 'react-bootstrap';
import { FormControl,FormGroup,HelpBlock,ControlLabel,Col,Form,Checkbox} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';



class InputinfoHorizontal extends React.Component {
    constructor(prop){
        super(prop);
        this.name=this.props.name;
        this.link=this.props.link;
        this.ep=this.props.episode;
        this.ctg=this.props.category;
        this.changeName = this.changeName.bind(this);
        this.changeEp = this.changeEp.bind(this);
        this.changeLink = this.changeLink.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.saveChange=this.saveChange.bind(this);

    }
    saveChange(){
        this.props.changeEdit(this.props.seq,this.name,this.ep,this.link,this.ctg);


    }
    changeName(e){
        this.name=e.target.value;
    }
    changeEp(e){
        this.ep=e.target.value;
    }
    changeLink(e){
        this.link=e.target.value;
    }
    changeCategory(e){
        this.ctg=e.target.value;
    }
    render() {

        return(

            <Form horizontal>

                <FormGroup controlId='nameInput' bsSize="small">
                    <Col componentClass={ControlLabel} sm={2}>
                        Name:
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder={this.props.name} onChange={this.changeName}/>
                    </Col>
                </FormGroup>
                <FormGroup bsSize="small">
                    <Col componentClass={ControlLabel} sm={2}>
                        Episode:
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder={this.props.episode} onChange={this.changeEp}/>
                    </Col>
                </FormGroup>
                <FormGroup bsSize="small">
                    <Col componentClass={ControlLabel} sm={2}>
                        Link:
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder={this.props.link} onChange={this.changeLink}/>
                    </Col>
                </FormGroup>
                <FormGroup bsSize="small">
                    <Col componentClass={ControlLabel} sm={2}>
                        Category:
                    </Col>
                    <Col sm={10}>
                        <FormControl componentClass="select" placeholder={this.props.category} onChange={this.changeCategory}>
                            <option value="anime">Anime</option>
                            <option value="comics">Comics</option>
                            <option value="book">Books</option>
                        </FormControl>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button bsStyle="primary" onClick={this.saveChange}>Save changes</Button>
                    </Col>
                </FormGroup>

            </Form>


        );
    }
}
class Items extends React.Component{
    constructor(prop){
        super(prop);
        this.state={
            select:true
        };
        this.changeCheck= this.changeCheck.bind(this);
    }
    changeCheck(){
        this.setState({
            select:!(this.state.select)
        });
        this.props.changeItem(this.state.select,this.props.seq);
    }
    render(){
        var l='http://'+this.props.link;
        return(

            <tr>
                <Checkbox onChange={this.changeCheck}>{this.props.seq}</Checkbox>
                <td>{this.props.name}</td>
                <td>{this.props.episode}</td>
                <td><a href={l}>link</a></td>
                <td>{this.props.category}</td>
            </tr>


        )
    }
}

class ItemsTable extends React.Component{
    render(){
        var list = (length,name,eps,link,ctg,de,tc,ci) => {
            var res = [];
            for(var i = 0; i < length; i++) {
                if (de[i]&&((ctg[i]===tc)||tc==='all')){
                    res.push(<Items seq={i+1} name={name[i]} episode={eps[i]} link={link[i]} category={ctg[i]} changeItem={ci.bind(this)} key={i+1}/>);
                }
            }
            return res;
        };

        return(
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Episode</th>
                    <th>Link</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {list(this.props.length,this.props.name,this.props.ep,this.props.link,this.props.category,this.props.exist,this.props.thisCategory,this.props.changeItem)}
                </tbody>
            </Table>
        )
    }
}

class ItemsTableDone extends React.Component{
    render(){
        var list = (length,name,eps,link,ctg,de,don,ci) => {
            var res = [];
            for(var i = 0; i < length; i++) {
                if (don[i]){
                    res.push(<Items seq={i+1} name={name[i]} episode={eps[i]} link={link[i]} category={ctg[i]} changeItem={ci.bind(this)} key={i+1}/>);
                }
            }
            return res;
        };

        return(
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Episode</th>
                    <th>Link</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {list(this.props.length,this.props.name,this.props.ep,this.props.link,this.props.category,this.props.exist,this.props.done,this.props.changeItem)}
                </tbody>
            </Table>
        )
    }
}


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
                                <ItemsTableDone length={this.props.length} name={this.props.name} ep={this.props.ep} link={this.props.link} category={this.props.category} exist={this.props.exist} done={this.props.done} changeItem={this.props.changeItem}/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    };
}

class Editinfo extends React.Component{
    constructor(prop){
        super(prop);
        this.state={
            showModal:this.props.ed
        };
        this.close=this.close.bind(this);

    }
    close() {
        this.setState({ showModal: false });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            showModal: nextProps.ed
        });
    }
    render() {
        return (
            <div>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit+{this.props.seq}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <InputinfoHorizontal seq={this.props.seq} name={this.props.name} episode={this.props.episode} link={this.props.link} category={this.props.category} changeEdit={this.props.changeEdit.bind(this)}/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>

                    </Modal.Footer>

                </Modal>
            </div>
        )
    }
}

class EditTable extends React.Component{
    render(){
        var list = (length,name,eps,link,ctg,de,ed,ce) => {
            var res = [];
            for(var i = 0; i < length; i++) {
                if (de[i]) {
                    res.push(<Editinfo seq={i+1} name={name[i]} episode={eps[i]} link={link[i]} category={ctg[i]} ed={ed[i+1]} changeEdit={ce.bind(this)} key={i+1}/>);
                }
            }
            return res;
        };
        return(
            <div>
                {list(this.props.length,this.props.name,this.props.ep,this.props.link,this.props.category,this.props.exist,this.props.ed,this.props.changeEdit)}
            </div>
        )
    }
}

class InputinfoInline extends React.Component {
    constructor(prop){
        super(prop);
        this.namet='';
        this.linkt='';
        this.ept='';
        this.ctgt='anime';
        this.det=true;
        this.cit=[];
        this.state={
            name:[],
            link:[],
            ep:[],
            ctg:[],
            length:0,
            de:[],
            ed:[],
            done:[]
        };
        this.changeName = this.changeName.bind(this);
        this.changeEp = this.changeEp.bind(this);
        this.changeLink = this.changeLink.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.changeItem = this.changeItem.bind(this);
        this.changeDelete = this.changeDelete.bind(this);
        this.changeDone = this.changeDone.bind(this);
        this.changeEdit = this.changeEdit.bind(this);
        this.changeE = this.changeE.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        /* var name,ep,link;
         name=this.name.value;
         ep=this.ep.value;
         link=this.link.value;*/

        var n=this.state.name;
        n.push(this.namet);
        var epp=this.state.ep;
        epp.push(this.ept);
        var l=this.state.link;
        l.push(this.linkt);
        var c=this.state.ctg;
        c.push(this.ctgt);
        var d=this.state.de;
        d.push(true);
        var ee=this.state.ed;
        ee.push(false);
        var dd=this.state.done;
        dd.push(false);
        var lg=this.state.length+1;
        this.setState({
            name:n,
            ep:epp,
            link:l,
            category:c,
            length:lg,
            de:d,
            ed:ee,
            done:dd
        });
        this.cit[lg]=false;
        /* alert('name:'+this.state.name+'\n'+
         'episode:'+this.state.ep+'\n'+
         'link:'+this.state.link+'\n'+
         'category:'+this.state.ctg+'\n'+
         'length:'+this.state.length+'\n'
         );*/

    }
    changeName(e){
        this.namet=e.target.value;
    }
    changeEp(e){
        this.ept=e.target.value;
    }
    changeLink(e){
        this.linkt=e.target.value;
    }
    changeCategory(e){
        this.ctgt=e.target.value;
    }
    changeItem(b,n){
        this.cit[n]=b;
    }
    changeDelete(){
        var dett=this.state.de;
        for (var j=0;j<this.state.length;j++){
            if (this.cit[j+1]===true){
                dett[j]=false;
            }
        }
        this.setState({
            de:dett
        });
    }
    changeEdit(seq,name,ep,link,ctg){
        var n=this.state.name;
        n[seq-1]=name;
        var epp=this.state.ep;
        epp[seq-1]=ep;
        var l=this.state.link;
        l[seq-1]=link;
        var c=this.state.ctg;
        c[seq-1]=ctg;
        this.setState({
            name:n,
            ep:epp,
            link:l,
            category:c,
        });
    }
    changeDone(){
        var dett=this.state.de;
        var dd=this.state.done;
        for (var j=0;j<this.state.length;j++){
            if (this.cit[j+1]===true){
                dett[j]=false;
                dd[j]=true;
            }
        }
        this.setState({
            de:dett,
            done:dd
        });
    }
    changeE(){
        var edtt=[];
        for (var j=0;j<this.state.length;j++){
            edtt[j+1]=false;
            if (this.cit[j+1]===true){
                edtt[j+1]=true;
            }
        }
        this.setState({
            ed:edtt
        });
    }

    render() {

        return(
            <div className="InputinfoInline">
                <Form inline onSubmit={this.handleSubmit}>

                    <FormGroup controlId='nameInput' bsSize="small">
                        <ControlLabel>Name:</ControlLabel>
                        {'  '}
                        <FormControl type="text" placeholder="input name here" onChange={this.changeName}/>
                    </FormGroup>
                    {'  '}
                    <FormGroup bsSize="small">
                        <ControlLabel>Episode:</ControlLabel>
                        {'  '}
                        <FormControl type="text" placeholder="input number of episode here" onChange={this.changeEp}/>
                    </FormGroup>
                    {'  '}
                    <FormGroup bsSize="small">
                        <ControlLabel>Link:</ControlLabel>
                        {'  '}
                        <FormControl type="text" placeholder="input link here" onChange={this.changeLink}/>
                    </FormGroup>
                    {'  '}
                    <FormGroup bsSize="small">
                        <ControlLabel>Category:</ControlLabel>
                        {'  '}
                        <FormControl componentClass="select" placeholder="select category" onChange={this.changeCategory}>
                            <option value="anime">Anime</option>
                            <option value="comics">Comics</option>
                            <option value="book">Books</option>
                        </FormControl>
                    </FormGroup>
                    {'  '}
                    <Button bsStyle="info" onClick={this.handleSubmit}>
                        Submit
                    </Button>

                </Form>


                <Tags length={this.state.length} name={this.state.name} ep={this.state.ep} link={this.state.link} category={this.state.ctg} exist={this.state.de} done={this.state.done} changeItem={this.changeItem.bind(this)}/>

                <Form >
                    <ButtonToolbar id="bottonBar">
                        <Button bsStyle="primary" onClick={this.changeE}>Edit</Button>
                        <Button bsStyle="success" onClick={this.changeDone}>Done</Button>
                        <Button bsStyle="danger" onClick={this.changeDelete}>Delete</Button>
                    </ButtonToolbar>
                </Form>
                <EditTable length={this.state.length} name={this.state.name} ep={this.state.ep} link={this.state.link} category={this.state.ctg} exist={this.state.de} ed={this.state.ed} changeEdit={this.changeEdit.bind(this)}/>
            </div>
        );
    }
}

export default InputinfoInline;
