import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dice from './Dice';

const myMock = jest.fn();

it('renders without crashing', () => {
  shallow(
    <Dice
    dice={[1, 2, 6, 4, 4]}
    locked={[false, false, false, true, true]}
    hadleClick={myMock}
    />
  );
});

it('matches snapshot', () => {
  const wrapper = shallow(
    <Dice
    dice={[1, 2, 6, 4, 4]}
    locked={[false, false, false, true, true]}
    hadleClick={myMock}
    />
  );
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
