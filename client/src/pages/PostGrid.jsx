import { useEffect, useState } from "react";
import Post from "../components/Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://api.shyun.dev/post', {
            method: 'GET',
            credentials: "include"
        }).then(
            res => { res.json().then(posts => { setPosts(posts); }); }
        );
    }, []);

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 max-w-lg w-full">
                {posts.length > 0 && posts.map(post =>
                    <Post
                        key={post._id}
                        title={post.title}
                        image={post.filePath}
                        date={post.date}
                        summary={post.summary}
                        _id={post._id}
                    />
                )}
            </div>
        </div>
    );
}