import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should fire the onNewGame callback when link is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onNewGame={callback} />);
        wrapper.find('a').last().simulate('click');
        expect(callback).toHaveBeenCalled();
    });

    it('Should fire the onInfo callback when link is clicked', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onInfo={callback} />);
        wrapper.find('a').first().simulate('click');
        expect(callback).toHaveBeenCalled();
    });

});