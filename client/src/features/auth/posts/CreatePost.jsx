import { useState } from "react";
import ReactQuill from "react-quill";
import { Navigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
// import hljs from "highlight.js";

// hljs.configure({
//     languages: ['javascript', 'html', 'python', 'java', 'sql']
// });
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
    // syntax: {
    //     highlight: text => hljs.highlightAuto(text).value,
    // },
};

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    // state to redirect to post pages
    const [postComplete, setpostComplete] = useState('');

    async function createNewPost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);
        data.set("file", file[0]);

        const res = await fetch("https://myblogapi-410916.ue.r.appspot.com/auth/create/post", {
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
        return <Navigate to={'/posts'} />;
    }

    return (
        <div className="flex justify-center h-full">
            <form className="flex flex-col gap-2 w-[70%] border-2 p-4 h-full"
                onSubmit={createNewPost}
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
                <input className="py-4 text-sm"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={e => setFile(e.target.files)}
                    required
                ></input>
                <ReactQuill
                    className="flex flex-col h-full overflow-auto"
                    value={content}
                    onChange={val => setContent(val)}
                    modules={modules}
                    required />
                <button className="bg-red-300">Post</button>
            </form>
        </div>

    );
}
