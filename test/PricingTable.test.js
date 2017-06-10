import React from 'react';
import ReactDOM from 'react-dom';
import {PricingTable} from '../src/index';
import { shallow , mount} from 'enzyme';

describe('PricingTable', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PricingTable />, div);
    });

    it('should render with "react-pricing-table" class', () => {
      const wrapper = shallow(<PricingTable  />);
      expect(wrapper.hasClass('react-pricing-table')).toBe(true);
    });

});
