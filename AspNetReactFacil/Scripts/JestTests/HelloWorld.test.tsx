import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import * as React from 'react';
import { shallow } from 'enzyme';
import { HelloWorld } from '../HelloWorld/HelloWorld';
import { debug } from 'util';



it("Should work", () => {
    expect(true).toBe(true);
});

it('ShouldCoso', () => {
    debugger;
    const helloWorld = shallow(<HelloWorld show={true} />);
    expect(helloWorld.find('h2').text()).toEqual('Hello world Mostro!');
});