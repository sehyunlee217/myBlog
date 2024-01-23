import { useEffect, useState } from "react";
import Project from "../components/Project";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://api.shyun.dev/projects', {
            method: 'GET',
            credentials: "include"
        }).then(
            res => { res.json().then(project => { setProjects(project); }); }
        );
    }, []);

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 max-w-lg w-full">
                {projects.length > 0 && projects.map(project =>
                    <Project
                        key={project._id}
                        title={project.title}
                        image={project.filePath}
                        date={project.date}
                        summary={project.summary}
                        linkto={project.linkto}
                        github={project.github}
                        _id={project._id}
                    />
                )}
            </div>
        </div>

    );
}