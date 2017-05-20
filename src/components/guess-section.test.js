import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

    it('Renders the Guess Feedback', () => {
        const feedback = "Test";
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.contains( 
          <h2 id="feedback">{feedback}</h2>)).toEqual(true);
    });




});