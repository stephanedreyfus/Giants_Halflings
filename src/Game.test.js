import React from 'react';
import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
import Game from './Dice';

const handleClick = () => {};
const dice = [2, 5];
const locked = [true, true];

it('renders without crashing', () => {
    shallow(
        <Game locked={locked} dice={dice} handleClick={handleClick} />
        );
    });
    
    // FIXME need to test for open and closed modals
