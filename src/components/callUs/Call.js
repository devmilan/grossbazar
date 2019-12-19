import React from 'react';
import css from './Call.module.scss';

const CallUs = () => {
    return (
        <div className={css.call_us}>
            <img src={require('../../assets/img/call.png')} className="img-fluid" alt="call" />
            <h3>if you have any question please call us</h3>
            <h2>+91-8456938783</h2>
        </div>
    )
}

export default CallUs;