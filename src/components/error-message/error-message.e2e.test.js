import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorMessage from './error-message';


configure({adapter: new Adapter()});

it(`Click on message should call a function`, () => {
  const onClick = jest.fn();
  const text = `message`;

  const wrapper = shallow(
      <ErrorMessage
        text={text}
        onClick={onClick}
      />
  );
  wrapper.find(`div`).at(0).simulate(`click`);

  expect(onClick).toHaveBeenCalledTimes(1);
});

