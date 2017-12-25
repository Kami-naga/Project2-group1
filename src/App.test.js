import React from 'react';
import{shallow,mount} from 'enzyme';
import App from './App';
import InputinfoInline from './input'
import Title from './title';
import Navibar from './navibar'
import List1 from './list1';
import List2 from './list1';
import List3 from './list1';

it('Homepage rendering without crash', () => {
    shallow(<App />);
});
it('Title rendering without crash', () => {
    shallow(<Title />);
});
it('Navibar rendering without crash', () => {
    shallow(<Navibar />);
});
it('List1 rendering without crash', () => {
    shallow(<List1 />);
});
it('List2 rendering without crash', () => {
    shallow(<List2 />);
});
it('List3 rendering without crash', () => {
    shallow(<List3 />);
});
it('Homepage: title', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.find('#title').text()).toEqual('Welcome to our app...');
});
it('Record page: the number of the input items is 4', () => {
    const wrapper = shallow(<InputinfoInline />);
    expect(wrapper.find('FormGroup').length).toEqual(4);
});

it('Record page: the number of the button items is 4', () => {
    const wrapper = shallow(<InputinfoInline />);
    expect(wrapper.find('Button').length).toEqual(4);
});

it('When submit was clicked, new item should be created', () => {
    const wrapper = mount(<InputinfoInline />)
    expect(wrapper.find('Items').length).toEqual(0);
    wrapper.find({bsStyle: 'info'}).simulate('click')
    expect(wrapper.find('Items').length).toEqual(2);
})

it('Get name', () => {
    const wrapper = mount(<InputinfoInline />)
    const i=wrapper.find('input[placeholder="input name here"]')
    i.simulate('focus')
    i.simulate("change",{target:{value:"testname!"}})
    wrapper.find('button[className="btn btn-info"]').simulate('click')
    expect(wrapper.state('name')).toEqual(["testname!"]);
})
it('Get episode', () => {
    const wrapper = mount(<InputinfoInline />)
    const i=wrapper.find('input[placeholder="input number of episode here"]')
    i.simulate('focus')
    i.simulate("change",{target:{value:2}})
    wrapper.find('button[className="btn btn-info"]').simulate('click')
    expect(wrapper.state('ep')).toEqual([2]);
})
it('Get link', () => {
    const wrapper = mount(<InputinfoInline />)
    const i=wrapper.find('input[placeholder="input link here"]')
    i.simulate('focus')
    i.simulate("change",{target:{value:"testlink"}})
    wrapper.find('button[className="btn btn-info"]').simulate('click')
    expect(wrapper.state('link')).toEqual(["testlink"]);
})
it('Get category', () => {
    const wrapper = mount(<InputinfoInline />)
    const i=wrapper.find('select[placeholder="select category"]')
    i.simulate('focus')
    i.simulate("change",{target:{value:"Comics"}})
    wrapper.find('button[className="btn btn-info"]').simulate('click')
    expect(wrapper.state('ctg')).toEqual(["Comics"]);
})

it('Get length', () => {
    const wrapper = mount(<InputinfoInline />)
    const len=wrapper.state().length
    wrapper.find('button[className="btn btn-info"]').simulate('click')
    expect(wrapper.state('length')).toEqual(len+1);
})

it('Change name', () => {
    const wrapper = mount(<InputinfoInline />)
    wrapper.setState({
        name:["test"],
        ep:[1],
        link:["abc.com"],
        category:["anime"],
        length:1,
        de:[true],
        ed:[false],
        done:[false]})
    const c =wrapper.find({type:"checkbox"})
    c.simulate("change",{target:{checked:true}})
    wrapper.find('button#edit').simulate('click')
    const i=wrapper.find('input[placeholder="test"]')
    i.simulate('focus')
    i.simulate("change",{target:{value:"testname!"}})
    wrapper.find('button#change').simulate('click')
    expect(wrapper.state('name')).toEqual(["testname!"]);
})

it('Change episode', () => {
    const wrapper = mount(<InputinfoInline />)
    wrapper.setState({
        name:["test"],
        ep:[1],
        link:["abc.com"],
        category:["anime"],
        length:1,
        de:[true],
        ed:[false],
        done:[false]})
    const c =wrapper.find({type:"checkbox"})
    c.simulate("change",{target:{checked:true}})
    wrapper.find('button#edit').simulate('click')
    const i=wrapper.find('input[placeholder=1]')
    i.simulate('focus')
    i.simulate("change",{target:{value:2}})
    wrapper.find('button#change').simulate('click')
    expect(wrapper.state('ep')).toEqual([2]);
})

it('Change link', () => {
    const wrapper = mount(<InputinfoInline />)
    wrapper.setState({
        name:["test"],
        ep:[1],
        link:["abc.com"],
        category:["anime"],
        length:1,
        de:[true],
        ed:[false],
        done:[false]})
    const c =wrapper.find({type:"checkbox"})
    c.simulate("change",{target:{checked:true}})
    wrapper.find('button#edit').simulate('click')
    const i=wrapper.find('input[placeholder="abc.com"]')
    i.simulate('focus')
    i.simulate("change",{target:{value:"changed.com"}})
    wrapper.find('button#change').simulate('click')
    expect(wrapper.state('link')).toEqual(["changed.com"]);
})

it('Change category', () => {
    const wrapper = mount(<InputinfoInline />)
    wrapper.setState({
        name:["test"],
        ep:[1],
        link:["abc.com"],
        category:["anime"],
        length:1,
        de:[true],
        ed:[false],
        done:[false]})
    const c =wrapper.find({type:"checkbox"})
    c.simulate("change",{target:{checked:true}})
    wrapper.find('button#edit').simulate('click')
    const i=wrapper.find('select#categoryChange')
    i.simulate('focus')
    i.simulate("change",{target:{value:"comics"}})
    wrapper.find('button#change').simulate('click')
    expect(wrapper.state('ctg')).toEqual(["comics"]);
})

it('Delete', () => {
    const wrapper = mount(<InputinfoInline />)
    wrapper.setState({
        name:["test"],
        ep:[1],
        link:["abc.com"],
        category:["anime"],
        length:1,
        de:[true],
        ed:[false],
        done:[false]})
    expect(wrapper.find('Items').length).toEqual(1);
    const c =wrapper.find({type:"checkbox"})
    c.simulate("change",{target:{checked:true}})
    wrapper.find('button[className="btn btn-danger"]').simulate('click')
    expect(wrapper.find('Items').length).toEqual(0);
})

it('Show records', () => {
    const wrapper = mount(<InputinfoInline />)
    wrapper.setState({
        name:["test1","test2","test3","test4"],
        ep:[1,2,3,4],
        link:["abc.com","def.com","ghi.com","jkl.com"],
        category:["anime","comics","books","comics",],
        length:4,
        de:[true,true,true,true],
        ed:[false,false,false,false],
        done:[false,false,false,true]})
    const all =wrapper.find('a#tabs-with-dropdown-tab-first')
    all.simulate("click")
    expect(wrapper.find('Items').length).toEqual(5);  //4(normal)+ 1(Done)
})

it('Check filter1', () => {
    const wrapper = mount(<List1 />)
    expect(wrapper.find('tr').length).toEqual(9);
    const i=wrapper.find('input')
    i.simulate('focus')
    i.simulate("change",{target:{value:"从零开始的"}})
    expect(wrapper.find('tr').length).toEqual(2);
})

it('Check filter2', () => {
    const wrapper = mount(<List2 />)
    expect(wrapper.find('tr').length).toEqual(9);
    const i=wrapper.find('input')
    i.simulate('focus')
    i.simulate("change",{target:{value:"一"}})
    expect(wrapper.find('tr').length).toEqual(2);
})

it('Check filter3', () => {
    const wrapper = mount(<List3 />)
    expect(wrapper.find('tr').length).toEqual(9);
    const i=wrapper.find('input')
    i.simulate('focus')
    i.simulate("change",{target:{value:"N"}})
    expect(wrapper.find('tr').length).toEqual(2);
})

it('filter1 unfound', () => {
    const wrapper = mount(<List1 />)
    expect(wrapper.find('tr').length).toEqual(9);
    const i=wrapper.find('input')
    i.simulate('focus')
    i.simulate("change",{target:{value:"a"}})
    expect(wrapper.contains(<td> Nothing found in here... </td>)).toEqual(true);
})

it('filter2 unfound', () => {
    const wrapper = mount(<List2 />)
    expect(wrapper.find('tr').length).toEqual(9);
    const i=wrapper.find('input')
    i.simulate('focus')
    i.simulate("change",{target:{value:"a"}})
    expect(wrapper.contains(<td> Nothing found in here... </td>)).toEqual(true);
})

it('filter3 unfound', () => {
    const wrapper = mount(<List3 />)
    expect(wrapper.find('tr').length).toEqual(9);
    const i=wrapper.find('input')
    i.simulate('focus')
    i.simulate("change",{target:{value:"a"}})
    expect(wrapper.contains(<td> Nothing found in here... </td>)).toEqual(true);
})
