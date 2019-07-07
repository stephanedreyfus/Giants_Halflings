import React from 'react';
import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
import Game from './Dice';

it('renders without crashing', () => {
    shallow(
        <Game />
        );
    });
    
    // FIXME need to test for open and closed modals
