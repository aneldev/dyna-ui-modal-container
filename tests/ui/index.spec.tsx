import "jest";

import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import * as React from 'react';
import * as enzyme from 'enzyme';

import {DynaModalContainer} from '../../src';

describe('Home', () => {
  let wrapper;

  it('has expected content with deep render', () => {
    wrapper = enzyme.shallow(
      (
        <DynaModalContainer show onClick={() => console.log('I am clicked')}>My button</DynaModalContainer>
      ),
      {}
    );

    expect(wrapper).toMatchSnapshot();
  });
});
