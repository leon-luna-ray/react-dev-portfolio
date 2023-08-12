import React from "react";
import { getImageUrl } from "../../lib/api";

export const CardProject = ({ project }) => {
    return (
        <div className='card project'>

            <div className="img-wrap">
                <img src={getImageUrl(project.mainImage).size(300, 300).url()} alt={project.title} />
            </div>

            <div className="details">
                <div className="text">
                    <h3>{project.title}</h3>
                    <p className='line-clamp-4'>{project.intro}</p>
                </div>

                <div className="links">
                    <a href={project.url} target='_blank' className="button zoom-in-out">Launch</a>
                    <a href={project.repository} target='_blank' className="button zoom-in-out">Code</a>
                </div>
            </div>

        </div>
    );
}

export default CardProject;
