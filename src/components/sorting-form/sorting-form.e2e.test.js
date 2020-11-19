import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SortingForm} from './sorting-form';

const currentSorting = `Popular`;
const isMenuOpen = false;

configure({adapter: new Adapter()});

it(`Click on toggle button should call a function`, () => {
  const onToggleClick = jest.fn();

  const wrapper = shallow(
      <SortingForm
        isMenuOpen={isMenuOpen}
        currentSorting={currentSorting}
        changeSorting={() => {}}
        onToggleClick={onToggleClick}
      />
  );
  wrapper.find(`span`).at(1).simulate(`click`);

  expect(onToggleClick).toHaveBeenCalledTimes(1);
});
