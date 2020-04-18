import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';

test('should render header correctly',() => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    // expect(toJSON(wrapper)).toMatchSnapshot();
    // we dont need to use the above file as we have installed it in jest.config.json file
    // and it converts it automatically without calling it.
    expect(wrapper).toMatchSnapshot();

    // const renderer = new ReactShallowRenderer;
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});