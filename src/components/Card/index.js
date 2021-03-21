import React from 'react'
import './styles.scss'

function Card(props) {
    let {name,links,image} = props.project.fields;

    
    return (
        <div className='card'>
            <div className="card__title">{name}</div>
            <div className="card__img">
            <img src={image.fields.file.url} alt={image.fields.title} width="500px"/>
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
                <div className="card__content-links">
                            <a className="webpage" href={links[0]}>Website</a>
                            <a className="github" href={links[1]}>Github</a>
                </div>
            </div>
        </div>
    )
}
export default Card
