import { useState, useEffect } from 'react';

import numberToWord from '../Plugins/numToWord';

export default function ClockWord() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      let newDate = new Date();
      if (newDate.getSeconds() == 0) {
        setDate(new Date());
        return;
      }
      if (newDate.getMinutes() != date.getMinutes()) {
        setDate(new Date());
        return;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  let getWordTime = () => {
    let hours = numberToWord(date.getHours());
    let minutes = numberToWord(date.getMinutes());
    return [hours, minutes];
  }

  return (
    <div className="clock">
      <h2 className="no-margin accent">
        <span>It's </span>
        <span className="bold">{ getWordTime()[0] }</span><br/>
        <span>{ getWordTime()[1] }</span>
      </h2>
      <h6 className="accent no-margin bold">UTC + 7</h6>
    </div>
  );
}
