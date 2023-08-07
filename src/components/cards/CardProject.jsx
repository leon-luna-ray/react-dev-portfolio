import React from "react";
import { getImageUrl } from "../../lib/api";

export const CardProject = ({ project }) => {
    console.log(project)
    return (
        <div className='card project'>
            <div className="img-wrap">
                <img src={getImageUrl(project.mainImage).size(300, 300).url()} alt={project.title} />
            </div>
            <div className="details">
                <h3>{project.title}</h3>
                <p className='line-clamp-4'>{project.intro}</p>
                <div className="links">
                    <a href={project.url} target='_blank' className="button">Launch</a>
                    <a href={project.repository} target='_blank' className="button">Code</a>
                </div>
            </div>

        </div>
    );
}

export default CardProject;