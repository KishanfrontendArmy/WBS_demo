import React from 'react';
import './podcast.css';

const Podcasts = () => {
    return (
        <section className="podcasts">
            <div className="container">
                <div className="podcasts_inr">
                    <div className="title_box_small">
                        <h2>PODCASTS</h2>
                        <p>Listen to live & pre-recorded Podcasts from the world of Blockchain & Crypto</p>
                    </div>
                    <div className="podcasts_list d-flex align-items-center justify-content-center">
                        <div className="podcasts_item_box">
                            <img src="/image/Spotify_App_Logo.svg.png" alt="" />
                        </div>
                        <div className="podcasts_item_box">
                            <img src="/image/Podcasts_(iOS).svg.png" alt="" />
                        </div>
                        <div className="podcasts_item_box">
                            <img src="/image/sound_cloud.png" alt="" />
                        </div>
                        <div className="podcasts_item_box">
                            <img src="/image/what-is-an-rss-feed-logo.png" alt="" />
                        </div>
                        <div className="podcasts_item_box">
                            <img src="/image/youtube-2017-icon-logo-D1FE045118-seeklogo.com.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Podcasts