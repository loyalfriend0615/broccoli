import React from 'react';

import photo1 from '../../assets/img/photo1.png';
import photo2 from '../../assets/img/photo2.png';
import photo3 from '../../assets/img/photo3.jpeg';

import cz_broccoli from '../../assets/img/CZ and his dog.jpeg';
import broccoli_teeth from '../../assets/img/Broccoli teeth.jpeg';

import './photos.css';

function Photos() {
    return (
        <div id="photos">
            <div>
            </div>
            <div>
                <img src= {photo1} alt="broccoli and friend" width="377px" height="565px" />
                <img src= {photo2} alt="brocooli teeth"  width="377px" height="565px" />
                <img src= {photo3} alt="brocooli"  width="340px" height="474px" />
            </div>
            <div>
                <img src= {photo3} alt="broccoli" width="463px" height="573px" />
                <div>
                    <div>
                        <img src= {cz_broccoli} alt="cz and his dog" width="308px" height="370px" />
                    </div>
                    <div>
                        <img src= {broccoli_teeth} alt="broccoli teeth" width="308px" height="230px" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Photos;