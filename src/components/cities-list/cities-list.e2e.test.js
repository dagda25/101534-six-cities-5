import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CitiesList from './cities-list';
import {cities} from '../../utils/const';

const currentCity = cities[0];

configure({adapter: new Adapter()});

it(`Click on link should call a function`, () => {
  const changeCity = jest.fn();

  const wrapper = shallow(
      <CitiesList
        cities={cities}
        changeCity={changeCity}
        currentCity={currentCity}
      />
  );
  wrapper.find(`a`).at(1).simulate(`click`);

  expect(changeCity).toHaveBeenCalledTimes(1);
});

