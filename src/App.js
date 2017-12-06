import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


import { Button,ButtonToolbar,ButtonGroup} from 'react-bootstrap';
import { FormControl,FormGroup,HelpBlock,ControlLabel,Col,Form} from 'react-bootstrap';
import {Table} from 'react-bootstrap'



class InputinfoHorizontal extends React.Component {
    constructor(prop){
        super(prop);
        this.name='';
        this.link='';
        this.ep='';
        this.ctg='anime';
        this.changeName = this.changeName.bind(this);
        this.changeEp = this.changeEp.bind(this);
        this.changeLink = this.changeLink.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        /* var name,ep,link;
         name=this.name.value;
         ep=this.ep.value;
         link=this.link.value;*/

        alert('Name:'+this.name+'\n'+
            'Episode:'+this.ep+'\n'+
            'Link:'+this.link+'\n'+
            'Category:'+this.ctg+'\n');
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
            <div>
                <Form horizontal onSubmit={this.handleSubmit}>

                    <FormGroup controlId='nameInput' bsSize="small">
                        <Col componentClass={ControlLabel} sm={2}>
                            Name:
                        </Col>
                        <Col sm={10}>
                        <FormControl type="text" placeholder="input name here" onChange={this.changeName}/>
                        </Col>
                    </FormGroup>
                    <FormGroup bsSize="small">
                        <Col componentClass={ControlLabel} sm={2}>
                            Episode:
                        </Col>
                        <Col sm={10}>
                        <FormControl type="text" placeholder="input number of episode here" onChange={this.changeEp}/>
                        </Col>
                    </FormGroup>
                    <FormGroup bsSize="small">
                        <Col componentClass={ControlLabel} sm={2}>
                            Link:
                        </Col>
                        <Col sm={10}>
                        <FormControl type="text" placeholder="input link here" onChange={this.changeLink}/>
                        </Col>
                    </FormGroup>
                    <FormGroup bsSize="small">
                        <Col componentClass={ControlLabel} sm={2}>
                            Category:
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="input category here" onChange={this.changeCategory}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button bsStyle="info" onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </Col>
                    </FormGroup>

                </Form>
                <p>..</p>
            </div>
        );
    }
}
class Items extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.seq}</td>
                <td>{this.props.name}</td>
                <td>{this.props.episode}</td>
                <td>{this.props.link}</td>
            </tr>
        )
    }
}

class ItemsTable extends React.Component{
    render(){
        var list = (length,name,eps,link) => {
            var res = [];
            for(var i = 0; i < length; i++) {
                res.push(<Items seq={i+1} name={name[i]} episode={eps[i]} link={link[i]} key={i+1}/>);
            }
            return res;
        }

        return(
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Episode</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody>
                 {list(this.props.length,this.props.name,this.props.ep,this.props.link)}
                </tbody>
            </Table>
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
        this.state={
            name:[],
            link:[],
            ep:[],
            ctg:[],
            length:0,
        };
        this.changeName = this.changeName.bind(this);
        this.changeEp = this.changeEp.bind(this);
        this.changeLink = this.changeLink.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
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
        var lg=this.state.length+1;
        this.setState({
            name:n,
            ep:epp,
            link:l,
            category:c,
            length:lg
        });

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
                        <FormControl type="text" placeholder="input category here" onChange={this.changeCategory}/>
                    </FormGroup>
                    {'  '}
                    <Button bsStyle="info" onClick={this.handleSubmit}>
                        Submit
                    </Button>

                </Form>
                <ItemsTable length={this.state.length} name={this.state.name} ep={this.state.ep} link={this.state.link} category={this.state.ctg}/>
            </div>
        );
    }
}



class Title extends React.Component{
    render(){
        return(
            <div>
                <p id="title">unknown title</p>
                <p id="intro">unknown intro</p>
            </div>
        )
    }
}
class App extends React.Component {  //定义组件，也可以用React.createClass方法创建组件
    render() {
        return (
            <div>
                <Title/>
                <InputinfoInline/>
            </div>
        );
    }
}
export default App;
