import { useState } from "react";
import { dataProjects } from "../projects/dataProjects";
import MainSlider from "./main-slider/MainSlider";
import "./main-slider/MainSlider.css"
import "./Main.css"
import MainNews from "./main-news/mainNews";
import AnimPreloaderAjax from "../animations/preloader/Preloader";
import { useEffect } from "react";


function Main() {
    const [projects] = useState(dataProjects);
    // eslint-disable-next-line
    const [stateLoader, setStateLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setStateLoader(false));
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="App">
            <AnimPreloaderAjax />
            <MainSlider />
            <div className="projectsHeader">
                <h1>Проекты</h1>
            </div>
            <div className="project-wrap">
                {projects.slice(0, 1).map(project => (
                <div key={project.id} className="project-item">
                    <div className="project-item-wrap">
                    <img src={project.image} alt={project.title} />
                    <div className="project-item-inner">
                        <div className="project-heading">
                            <h3>{project.title}</h3>
                        </div>
                        <ul>
                        <div className="projectDescFieldOne">
                        <p>объем инвестиций:</p>
                            <span>{project.investValue}</span>
                        </div>
                        <div className="projectDescFieldTwo">
                        <p>отрасль:</p>
                            <span>{project.sector}</span>
                        </div>
                        <div className="projectDescFieldOne">
                        <p>стадия проекта:</p>
                            <span>{project.stage}</span>
                        </div>
                        <div className="projectDescFieldTwo">
                        <p>форма реализации:</p>
                            <span>{project.type}</span>
                        </div>
                        <p>услуги проекта:</p>
                        {project.description.map(desc => (
                            <li key={desc}>{desc}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </div>
                ))}
                {projects.slice(1, 2).map(project => (
                <div key={project.id} className="project-item">
                    <div className="project-item-wrap">
                    <img src={project.image} alt={project.title} />
                    <div className="project-item-inner">
                        <div className="project-heading">
                            <h3>{project.title}</h3>
                        </div>
                        <ul>
                        <div className="projectDescFieldOne">
                        <p>объем инвестиций:</p>
                            <span>{project.investValue}</span>
                        </div>
                        <div className="projectDescFieldTwo">
                        <p>отрасль:</p>
                            <span>{project.sector}</span>
                        </div>
                        <div className="projectDescFieldOne">
                        <p>стадия проекта:</p>
                            <span>{project.stage}</span>
                        </div>
                        <div className="projectDescFieldTwo">
                        <p>форма реализации:</p>
                            <span>{project.type}</span>
                        </div>
                        <p>услуги проекта:</p>
                        {project.description.map(desc => (
                            <li key={desc}>{desc}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="project-wrap">
                {projects.slice(2, 3).map(project => (
                <div key={project.id} className="project-item">
                    <div className="project-item-wrap">
                    <img src={project.image} alt={project.title} />
                    <div className="project-item-inner">
                        <div className="project-heading">
                            <h3>{project.title}</h3>
                        </div>
                        <ul>
                        <div className="projectDescFieldOne">
                        <p>объем инвестиций:</p>
                            <span>{project.investValue}</span>
                        </div>
                        <div className="projectDescFieldTwo">
                        <p>отрасль:</p>
                            <span>{project.sector}</span>
                        </div>
                        <div className="projectDescFieldOne">
                        <p>стадия проекта:</p>
                            <span>{project.stage}</span>
                        </div>
                        <div className="projectDescFieldTwo">
                        <p>форма реализации:</p>
                            <span>{project.type}</span>
                        </div>
                        <p>услуги проекта:</p>
                        {project.description.map(desc => (
                            <li key={desc}>{desc}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </div>
                ))}
                {projects.slice(3, 4).map(project => (
                <div key={project.id} className="project-item">
                    <div className="project-item-wrap">
                    <img src={project.image} alt={project.title} />
                    <div className="project-item-inner">
                        <div className="project-heading">
                            <h3>{project.title}</h3>
                        </div>
                        <ul>
                        <div className="projectDescFieldOne">
                        <p>объем инвестиций:</p>
                            <span>{project.investValue}</span>
                        </div>
                        <div className="projectDescFieldTwo">
                        <p>отрасль:</p>
                            <span>{project.sector}</span>
                        </div>
                        <div className="projectDescFieldOne">
                        <p>стадия проекта:</p>
                            <span>{project.stage}</span>
                        </div>
                        <div className="projectDescFieldTwo">
                        <p>форма реализации:</p>
                            <span>{project.type}</span>
                        </div>
                        <p>услуги проекта:</p>
                        {project.description.map(desc => (
                            <li key={desc}>{desc}</li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <MainNews />
        </div>
    );
}
export default Main;