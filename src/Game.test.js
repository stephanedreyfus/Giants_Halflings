import React from 'react';
import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
import Game from './Game';

it('renders without crashing', () => {
    shallow(
        <Game />
    );
});
    
describe('directly testing "toggleModal" through component method', () => {
    it('should change "isShowing" back and forth from true to false and back', () => {
        const wrapper = shallow(<Game />);
        const instance = wrapper.instance();
        expect(wrapper.state('isShowing')).toBe(false);
        instance.toggleModal();
        expect(wrapper.state('isShowing')).toBe(true);
        instance.toggleModal();
        expect(wrapper.state('isShowing')).toBe(false);
    })
})
    // FIXME need to test for open and closed modals

// FIXME clear below when done testing
// describe('indirectly testing "incrementCounter" through click simulation', () => {
//     it('should update the count by 1 when invoked by default', () => {
//         const wrapper = shallow(<Home />);
//         expect(wrapper.state('counter')).toBe(0);
//         wrapper.find('button').simulate('click');
//         expect(wrapper.state('counter')).toBe(1);
//     });
//     it('should add two to the count when the "two" value is true', () => {
//         const wrapper = shallow(<Home two />);
//         expect(wrapper.state('counter')).toBe(0);
//         wrapper.find('button').simulate('click');
//         expect(wrapper.state('counter')).toBe(2);
//     });
//     });

// describe('directly invoking the "incrementCounter" method from component instance', () => {
//     it('should update the count by 1 when invoked by default', () => {
//       const wrapper = shallow(<Home />);
//       const instance = wrapper.instance();
//       expect(wrapper.state('counter')).toBe(0);
//       instance.incrementCounter();
//       expect(wrapper.state('counter')).toBe(1);
//     });
//     it('should add two to the counter when the "two" value is true', () => {
//       const wrapper = shallow(<Home />);
//       const instance = wrapper.instance();
//       expect(wrapper.state('counter')).toBe(0);
//       instance.incrementCounter(true);
//       expect(wrapper.state('counter')).toBe(2);
//     });
//   });