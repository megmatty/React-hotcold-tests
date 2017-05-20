import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the Guess Count', () => {
        const count = "1";
        const wrapper = shallow(<GuessCount count={count} />);
        expect(wrapper.contains(<span id="count">{count}</span>)).toEqual(true);
    });


});