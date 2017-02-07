import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import WeatherApp from '../src/WeatherApp';
import Day from '../src/Day';

describe('<WeatherApp />', () => {

	it('should have this.state.weather initially set to []', () => {
    const wrapper = mount(<WeatherApp />);
    expect(wrapper.state('weather')).to.eql([]);
  });

  it('should call componentDidMount at least once', () => {
    sinon.spy(WeatherApp.prototype, 'componentDidMount');
    const wrapper = mount(<WeatherApp />);
    expect(WeatherApp.prototype.componentDidMount.calledOnce).to.equal(true);
  });

	it('should render 10 <Day /> when this.state.weather.length === 10', () => {
    const wrapper = mount(<Day />);
    expect(wrapper.find(Day)).to.have.length(10);
  });

});
