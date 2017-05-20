import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
    	var guesses = [1,2];
        shallow(<GuessList guesses={guesses}/>);
    });



});