import React from 'react';

import hisvideo from '../../assets/video/Broccoli_Video.MP4';

import './video.css';

function Video() {
    return (
        <div id="video">
            <div>
            </div>
            <div>
                <video controls>
                    <source src={hisvideo} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default Video;