import React from 'react';

import Button from '../Button';
import './styles.scss';
function Banner() {
    return (
        <div className='banner'>
            <div className="banner--container">
                <div className="banner__content">
                    <div className="banner__text">
                    Hello, I'm <span className="banner__content--highlight">Christian Acosta.</span>
                    <br/>
                    I'm a full-stack web developer.
                    </div>
                        <Button buttonStyle='btn--outline' buttonSize='btn--large'>View my work</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner;
