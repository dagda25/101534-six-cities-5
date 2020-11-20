import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewForm from './review-form';


configure({adapter: new Adapter()});

it(`Click on message should call a function`, () => {
  const postReview = jest.fn();
  const id = 1;

  const wrapper = shallow(
      <ReviewForm
        id={id}
        postReview={postReview}
      />
  );
  wrapper.find(`input`).at(0).simulate(`click`);
  wrapper.find(`textarea`).at(0).simulate(`change`, {target: {value: `sometext`}});
  wrapper.find(`form`).at(0).simulate(`submit`);

  expect(postReview).toHaveBeenCalledTimes(1);
});

