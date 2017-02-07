import React from 'react';
import moment from 'moment';

const Day = (props) => (
  <div className="container-fluid">
    <div className="row">
    { props.dayList.map((item, index) => {
        return (
          <div key={item.date} className={`col-md-1 ${index === 0 ? 'col-md-offset-1' : ''} day-container`}>
            <div className="day">
              {moment(item.date, 'DD MMM YYYY').format('dddd, MMMM Do YYYY')}
              <div>
                <span className="high">{props.unit ? item.high + '°F' : Math.round((item.high - 32) * (5/9)) + '°C'}</span>
                <span className="low">{props.unit ? item.low + '°F' : Math.round((item.low - 32) * (5/9)) + '°C'}</span>
              </div>
              <img src={`images/${item.text.replace(/\s/g, '_').toLowerCase()}.${item.text === 'Breezy' ? 'svg' : 'png'}`} />
              <span className="weather">{item.text}</span>
            </div>
          </div>
        );
      })
    }
    </div>
  </div>
);

export default Day;