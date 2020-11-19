import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from './login-page';


configure({adapter: new Adapter()});

it(`Submit event should call a callback`, () => {
  const onSubmit = jest.fn();

  const wrapper = shallow(
      <LoginPage
        onSubmit={onSubmit}
      />
  );
  wrapper.find(`input`).at(0).simulate(`change`, {target: {name: `email`, value: `test@test.ru`}});
  wrapper.find(`input`).at(1).simulate(`change`, {target: {name: `password`, value: `123456`}});
  wrapper.find(`form`).at(0).simulate(`submit`);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
