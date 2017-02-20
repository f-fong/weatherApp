const React = require('react');
const enzyme = require('enzyme');
const mount = enzyme.mount;
const shallow = enzyme.shallow;
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const WeatherApp = require('../src/WeatherApp').default;
const Day = require('../src/Day').default;

const jsdom = require('jsdom');
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

const testDays = [
  {
    date: '05 Feb 2017',
    high: 50,
    low: 40,
    text: 'Breezy'
  },
  {
    date: '06 Feb 2017',
    high: 55,
    low: 42,
    text: 'Rain'
  },
  {
    date: '06 Feb 2017',
    high: 48,
    low: 43,
    text: 'Rain'
  }
];

describe('<WeatherApp />', () => {

	// it('should have this.state.weather initially set to []', () => {
 //    const wrapper = mount(<WeatherApp />);
 //    expect(wrapper.state('weather')).to.eql([]);
 //  });

 //  it('should call componentDidMount at least once', () => {
 //    sinon.spy(WeatherApp.prototype, 'componentDidMount');
 //    const wrapper = mount(<WeatherApp />);
 //    expect(WeatherApp.prototype.componentDidMount.calledOnce).to.equal(true);
 //  });

	// it('should render three <Day /> when this.state.weather.length === 3', () => {
 //    const wrapper = mount(<Day />);
 //    wrapper.setState({ dayList: testDays });
 //    expect(wrapper.find(Day)).to.have.length(10);
 //  });

});

describe('<Day />', () => {
  it('renders an item', () => {
    const wrapper = shallow(
      <Day dayList={[{ date: '05 Feb 2017', high: 50, low: 40, text: 'Breezy' }]} />
    );
    expect(wrapper.text()).to.contain('Breezy');
  });
});
