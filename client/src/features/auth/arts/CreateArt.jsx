import { useState } from "react";
import ReactQuill from "react-quill";
import { Navigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block', 'link', 'image'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ],
};

export default function CreateArtPost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    // state to redirect to post pages
    const [postComplete, setpostComplete] = useState('');

    async function createNewArtPost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("file", file[0]);

        const res = await fetch("https://myblog-api-bj63.onrender.com/auth/create/art", {
            method: 'POST',
            credentials: "include",
            body: data
        });

        setTitle('');
        setSummary('');
        setContent('');
        setFile('');

        setpostComplete(true);
    }

    if (postComplete) {
        return <Navigate to={'/arts'} />;
    }

    return (
        <div className="flex justify-center">
            <form className="flex flex-col gap-2 w-[70%] border-2 p-4"
                onSubmit={createNewArtPost}
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
                ></input>
                <input className="py-3 text-sm"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={e => setFile(e.target.files)}
                    required
                ></input>
                <button className="bg-red-300">Upload Art</button>
            </form>
        </div>

    );
}
