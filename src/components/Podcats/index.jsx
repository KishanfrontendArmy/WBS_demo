import React from 'react';
import './podcast.css';

const Podcasts = () => {
    return (
        <section className="podcasts page-section">
            <div className="container">
                <div className="podcasts_inr">
                    <div className="title_box_small col-12 col-md-9 mx-auto wow fadeInUp">
                        <h2>PODCASTS</h2>
                        <p>Listen to live & pre-recorded Podcasts from the world of Blockchain & Crypto</p>
                    </div>
                    <div className="podcasts_list d-flex align-items-center justify-content-center">
                        <div className="podcasts_item_box col-auto wow zoomIn" data-wow-delay="0.1s">
                            <span className="products_icon" data-parallax='{"scale":0.9, "x":-20}'>
                                <img className="img-fluid" src="/image/Spotify_App_Logo.svg.png" alt="" />
                            </span>
                        </div>
                        <div className="podcasts_item_box col-auto wow zoomIn" data-wow-delay="0.3s">
                            <span className="products_icon" data-parallax='{"scale":0.8, "x":-10}'>
                                <img className="img-fluid" src="/image/Podcasts_(iOS).svg.png" alt="" />
                            </span>
                        </div>
                        <div className="podcasts_item_box col-auto wow zoomIn" data-wow-delay="0.5s">
                            <span className="products_icon" data-parallax='{"scale":0.7}'>
                                <img className="img-fluid" src="/image/sound_cloud.png" alt="" />
                            </span>
                        </div>
                        <div className="podcasts_item_box col-auto wow zoomIn" data-wow-delay="0.7s">
                            <span className="products_icon" data-parallax='{"scale":0.6, "x":10}'>
                                <img className="img-fluid" src="/image/what-is-an-rss-feed-logo.png" alt="" />
                            </span>
                        </div>
                        <div className="podcasts_item_box col-auto wow zoomIn" data-wow-delay="0.9s">
                            <span className="products_icon" data-parallax='{"scale":0.5, "x":20}'>
                                <img className="img-fluid" src="/image/youtube-2017-icon-logo-D1FE045118-seeklogo.com.png" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Podcasts