import { useEffect, useState } from "react";
import Post from "../Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3500/post', {
            method: 'GET',
            credentials: "include"
        }).then(
            res => { res.json().then(posts => { setPosts(posts); }); }
        );
    }, []);


    return (
        <div className="flex justify-center align-middle mx-20">
            <div id="gridwrapper">
                {posts.length > 0 && posts.map(post =>
                (
                    <Post
                        key={post.id}
                        title={post.title}
                        image={post.filePath}
                        date={post.date}
                        summary={post.summary} />
                ))}
            </div>
        </div>
    );
}