import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useParams, Navigate } from "react-router-dom";

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

export default function PostEdit() {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    // state to redirect to post pages
    const [editComplete, setEditComplete] = useState('');

    const { _id } = useParams();

    useEffect(() => {
        fetch(`https://myblog-api-bj63.onrender.com/post/${ _id }`, {
            method: 'GET',
            credentials: 'include'
        }).then(
            res => {
                res.json().then(postData => {
                    setTitle(postData.title);
                    setFile(postData.filePath);
                    setSummary(postData.summary);
                    setContent(postData.content);
                });
            }
        );;
    }, []);

    async function updatePost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);

        const res = await fetch(`https://myblog-api-bj63.onrender.com/auth/post/${ _id }`, {
            method: 'PUT',
            credentials: "include",
            body: data
        });

        // dump all previous data when submitted
        setTitle('');
        setSummary('');
        setContent('');

        setEditComplete(true);
    }

    async function deletePost(e) {
        e.preventDefault();
        const data = new FormData();

        const res = await fetch(`https://myblog-api-bj63.onrender.com/auth/post/${ _id }`, {
            method: 'DELETE',
            credentials: "include",
            body: data
        });

        // dump all previous data when submitted
        setTitle('');
        setSummary('');
        setContent('');

        setEditComplete(true);
    }

    if (editComplete) {
        return <Navigate to={'/posts'} />;
    }

    return (
        <div className="flex justify-center h-full">
            <form className="flex flex-col gap-2 w-[80%] border-2 p-4 h-full"
                onSubmit={updatePost}
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
                <ReactQuill
                    className="flex flex-col h-full overflow-auto"
                    value={content}
                    onChange={val => setContent(val)}
                    modules={modules}
                    required />
                <button className="bg-green-300">Update</button>
                <button className="bg-red-300" onClick={deletePost}>Delete</button>
            </form>
        </div>

    );
}
