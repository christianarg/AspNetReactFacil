import * as React from 'react';
import { shallow } from 'enzyme';
import { HelloWorld } from '../HelloWorld/HelloWorld';
import { debug } from 'util';



it("Should work", () => {
    expect(true).toBe(true);
});

it('Should have an h2 with concrete text', () => {
    const helloWorld = shallow(<HelloWorld show={true} />);
    expect(helloWorld.find('h2').text()).toEqual('Hello world Mostro!');
});

it('Should not show When show=false', () => {
    const helloWorld = shallow(<HelloWorld show={false} />);
    expect(helloWorld.html()).toBeNull();
});