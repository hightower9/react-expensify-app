import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly',() => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>); ///you can use any idex value you want
    expect(wrapper).toMatchSnapshot();
});