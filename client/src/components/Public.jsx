import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Clock from "./clock";
import Post from "./Post";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3500/post', {
            method: 'GET',
            credentials: "include"
        }).then(
            res => { res.json().then(posts => { setPosts(posts); }); }
        );
    }, []);

    // need to work on auth for crud operation on posts routes

    return (
        <div id='public-container' className='flex justify-center align-middle mx-60'>
            <div className="flex flex-col gap-32 text-xl">
                <div id="info-wrapper" className="flex flex-col gap-2">
                    <div className="text-3xl">Hello, I'm Joe Lee 👷‍♂️</div>
                    <div className="text-m">
                        Industrial engineering student at the University of Toronto, studying <b>Operations Research</b>, <b>Data Science</b>, and <b>Human Factors</b>.
                    </div>
                    <div>
                        I share a passion for both the <Link to="/arts" className="underline">arts</Link> and engineering.
                    </div>
                    <div>
                        Currently, learning web-development is one of my main priorities although I'm exploring different fields of
                    </div>
                </div>

                <div id="project-wrapper">
                    <div className="text-2xl">Projects</div>
                </div>

                <div id="posts-wrapper">
                    <div className="text-2xl">Posts</div>
                    <div className="flex justify-center align-middle w-[450px]">
                        <div className="w-full">
                            {posts.length > 0 && posts.slice(0, 3).map(post =>
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
                </div>
            </div>
        </div >
    );
}



