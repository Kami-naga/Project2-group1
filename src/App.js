import React, { Component } from 'react';
import Navibar from './navibar'


class App extends React.Component {  //定义组件，也可以用React.createClass方法创建组件
    render() {
        return (
            <div>
                <Navibar/>

                {this.props.children}
            </div>

    );
    }
};


export default App;
