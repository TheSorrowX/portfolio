import React from 'react'
import './styles.scss'
import Card from '../Card';
function Projects(props) {
    let {projects} = props;
    return (
        <div className="projects">
            
            <div className="projects__title">
                Projects
            </div>
            <div className="projects__content">
                {
                    projects.map( (project,index) => (
                      <div key={index} className="projects__content-card"><Card project={project}/></div>
                    ))
                }
{/*                 <div className="projects__content-card card box1">one</div>
                <div className="projects__content-card card box1">one</div>
                <div className="projects__content-card card box1">one</div>
                <div className="projects__content-card card box2">one</div>
                <div className="projects__content-card card box2">one</div>
                <div className="projects__content-card card box2">one</div> */}

            </div>
        </div>
    )
}

export default Projects
