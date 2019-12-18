import React from 'react';
import css from './Banner.module.scss';

const Banner = () => {
    return (
        <div>
            <div className={css.banner}>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require('../../assets/img/banner/kitchen-1300x400.jpg')} className="d-block w-100" alt="kitchen" />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../assets/img/banner/banner5-1300x400.jpg')} className="d-block w-100" alt="banner5" />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../assets/img/banner/republic-day-1300x400.jpg')} className="d-block w-100" alt="republic-day" />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../assets/img/banner/vegitables-1300x400.jpg')} className="d-block w-100" alt="vegitables" />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../assets/img/banner/groceries-1300x400.jpg')} className="d-block w-100" alt="groceries" />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../assets/img/banner/banner6-1300x400.jpg')} className="d-block w-100" alt="banner6" />
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner;