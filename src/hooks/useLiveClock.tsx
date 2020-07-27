import { useState, useEffect } from 'react';
import moment, { Moment } from 'moment';

const useLiveClock = () => {
    const [liveDate, setLiveDate] = useState(moment());
    const timerID = setInterval(() => tick(), 5000);
    const tick = () => {
        setLiveDate(moment());
    };

    useEffect(() => () => clearInterval(timerID));
    return liveDate as any;
};

export default useLiveClock;
