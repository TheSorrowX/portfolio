import React from 'react'
import './styles.scss'
import Card from '../Card';
function Projects() {
    return (
        <div className="projects">
            
            <div className="projects__title">
                Projects
            </div>
            <div className="projects__content">
                <div className="projects__content-card card box1"><Card/></div>
                <div className="projects__content-card card box1">one</div>
                <div className="projects__content-card card box1">one</div>
                <div className="projects__content-card card box1">one</div>
                <div className="projects__content-card card box2">one</div>
                <div className="projects__content-card card box2">one</div>
                <div className="projects__content-card card box2">one</div>

            </div>
        </div>
    )
}

export default Projects
