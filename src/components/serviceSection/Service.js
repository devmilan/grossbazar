import React from 'react';
import css from './Service.module.scss';

 const Service = () => {
    return (
        <div className={css.services}>
            <div className={css.service}>
                <img src="http://placehold.it/100" alt=""/>
                <div className="info">
                    <h4>FREE SHIPPING</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>
            </div>

            <div className={css.service}>
                <img src="http://placehold.it/100" alt=""/>
                <div className="info">
                    <h4>24 X 7 SERVICE</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>
            </div>

            <div className={css.service}>
                <img src="http://placehold.it/100" alt=""/>
                <div className="info">
                    <h4>FESTIVAL OFFER</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>
            </div>

            <div className={css.service}>
                <img src="http://placehold.it/100" alt=""/>
                <div className="info">
                    <h4>ONLINE PAYMENT</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>
            </div>
        </div>
    )
}

export default Service;