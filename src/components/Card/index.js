import React from 'react'
import './styles.scss'

function Card() {
    return (
        <div className='card'>
            <div className="card__img">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png" alt='project' style={{maxWidth: '400px'}}/>
            </div>
            <div className="card__content">
                <div className="card__content-icons">
                    <div className="icon">
                        <span>React.js</span>
                    </div>
                    <div className="icon">
                        <span>React.js</span>
                    </div>
                </div>   
            </div>
        </div>
    )
}
export default Card
