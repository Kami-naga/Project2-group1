import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import './App.js';
import './navibar.js';

import App from './App';
import Title from './title';
import InputinfoInline from './input';
import List1 from './list1';
import List2 from './list2';
import List3 from './list3';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import {
    HashRouter,
    Route
} from 'react-router-dom';

ReactDOM.render(
    (<HashRouter>
        <App>
            <Route exact path="/" component={Title} />
            <Route path="/record" component={InputinfoInline}/>
            <Route path="/list1" component={List1}/>
            <Route path="/list2" component={List2}/>
            <Route path="/list3" component={List3}/>
        </App>
    </HashRouter>),
    document.getElementById('root')
);



registerServiceWorker();
