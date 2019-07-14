import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Die from './Die';

const handleClick = () => {};

it("renders without crashing", () => {
    shallow (<Die value="1" handleClick={handleClick}/>);
});

it("matches snapshot when unlocked", () => {
    const wrapper = shallow(<Die value="1" handleClick={handleClick}/>);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});

it("matches snapshot when locked", () => {
    const wrapper = shallow(<Die value="1" locked handleClick={handleClick}/>);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});