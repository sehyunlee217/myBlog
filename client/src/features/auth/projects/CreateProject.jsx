import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function CreateProject() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [github, setGithub] = useState('');
    const [linkto, setLinkto] = useState('');
    const [file, setFile] = useState('');
    // state to redirect to post pages
    const [projectComplete, setprojectComplete] = useState('');

    async function createNewProject(e) {
        e.preventDefault();
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("github", github);
        data.set("linkto", linkto);
        data.set("file", file[0]);

        const res = await fetch("https://api.shyun.dev/auth/create/project", {
            method: 'POST',
            credentials: "include",
            body: data
        });

        setTitle('');
        setSummary('');
        setGithub('');
        setLinkto('');
        setFile('');

        setprojectComplete(true);
    }

    if (projectComplete) {
        return <Navigate to={'/projects'} />;
    }

    return (
        <div className="flex justify-center h-full">
            <form className="flex flex-col gap-2 w-[70%] border-2 p-4 h-full"
                onSubmit={createNewProject}
                encType="multipart/form-data">
                <input className="border-2 px-2 py-1 text-xl"
                    type="title" placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                ></input>
                <input className="border-2 px-2 text-lg"
                    type="summary"
                    placeholder="Summary"
                    value={summary}
                    onChange={e => setSummary(e.target.value)}
                    required
                ></input>
                <input className="border-2 px-2 text-lg"
                    type="github"
                    placeholder="Github Repository"
                    value={github}
                    onChange={e => setGithub(e.target.value)}
                    required
                ></input>
                <input className="border-2 px-2 text-lg"
                    type="linkto"
                    placeholder="Link to project"
                    value={linkto}
                    onChange={e => setLinkto(e.target.value)}
                    required
                ></input>
                <input className="py-4 text-sm"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={e => setFile(e.target.files)}
                    required
                ></input>
                <button className="bg-red-300">Upload Project</button>
            </form>
        </div>

    );
}
