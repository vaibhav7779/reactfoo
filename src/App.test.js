import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './App';
import Cta from './components/Cta';

describe("CTA component", () => {
    //Renders joke component with some text prop
    it("should accept props and return Buttons" , () =>{
        const cta = mount(<Cta isPaid={false} />);

        expect(cta.text()).not.toBe('');
    })    

    it("should render Upgrade button for free user" , () =>{
        const cta = mount(<Cta isPaid={false} />);

        expect(cta.text()).toBe('Upgrade Now');
    })  

    it("should render Extend Membership for paid user" , () =>{
        const cta = mount(<Cta isPaid={true} />);

        expect(cta.text()).toBe('Extend Membership');
    })      
});