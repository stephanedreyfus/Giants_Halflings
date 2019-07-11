import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Die from './Die';

const myMock = jest.fn();

it("renders without crashing", () => {
    shallow (<Die value="1" hadleClick={myMock()}/>);
});

it("matches snapshot when unlocked", () => {
    const wrapper = shallow(<Die value="1" hadleClick={myMock}/>);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});

it("matches snapshot when locked", () => {
    const wrapper = shallow(<Die value="1" locked hadleClick={myMock}/>);
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});