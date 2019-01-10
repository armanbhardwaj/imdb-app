import Input from '../Components/Input';
import Button from '../Components/Button';
import { shallow } from 'enzyme';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Input',()=> {
    it('checking...', ()=>{
        expect(Input).toBeDefined();
    })
    it('input should render', ()=>{
        const tree = shallow(<Input name="arman" value="bhardwaj" placeholder="enter here" />)
        expect(tree).toMatchSnapshot();
    })
})

describe('Button', ()=>{
    it('checking...', ()=>{
        expect(Input).toBeDefined();
    })
    it('button should render', ()=>{
        const tree =shallow(<Button name="vivian" value="dsena"/>)
        expect(tree).toMatchSnapshot();
    })
})