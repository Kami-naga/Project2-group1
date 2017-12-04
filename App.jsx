import React from 'react';  //引入react组件

import { Button,ButtonToolbar,ButtonGroup} from 'react-bootstrap';
import { FormControl,FormGroup,HelpBlock,ControlLabel} from 'react-bootstrap';




class Inputinfo extends React.Component {
    constructor(prop){
        super(prop);
        this.name='';
        this.link='';
        this.ep='';
        this.changeName = this.changeName.bind(this);
        this.changeEp = this.changeEp.bind(this);
        this.changeLink = this.changeLink.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        }
    handleSubmit(e){
       /* var name,ep,link;
        name=this.name.value;
        ep=this.ep.value;
        link=this.link.value;*/

        alert('Name:'+this.name+'\n'+
                'Episode:'+this.ep+'\n'+
                'Link:'+this.link+'\n');
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
    render() {

        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                    <FormGroup bsSize="small">
                        <ControlLabel>Name:</ControlLabel>
                        <FormControl type="text" placeholder="input name here" onChange={this.changeName}/>
                    </FormGroup>
                    <FormGroup bsSize="small">
                        <ControlLabel>Episode:</ControlLabel>
                        <FormControl type="text" placeholder="input number of episode here" onChange={this.changeEp}/>
                    </FormGroup>
                    <FormGroup bsSize="small">
                        <ControlLabel>Link:</ControlLabel>
                        <FormControl type="text" placeholder="input link here" onChange={this.changeLink}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>hh</ControlLabel>
                        <FormControl.Static>
                            haha
                        </FormControl.Static>
                    </FormGroup>
                    <Button bsStyle="info" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </form>
               <p>..</p>
            </div>
        );
    }
}





class App extends React.Component {  //定义组件，也可以用React.createClass方法创建组件
    render() {
        return (


                <Inputinfo/>

        );
    }
}
export default App;