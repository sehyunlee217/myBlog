import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoPython, BiLogoNodejs, BiLogoJava, BiLogoMongodb } from "react-icons/bi";
import Clock from "./clock";
import Post from "./Post";
import profilePic from "../img/profile.jpeg";

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
        <div id='public-container' className='max-w-2xl flex flex-col sm:gap-10 gap-12 '>
            <div id="info-wrapper" className="flex flex-col sm:gap-4 md:gap-6">
                <div className="text-3xl font-bold pb-5 font-nunito"><span className=" text-teal-400">Hi,</span> I'm Joe 👷‍♂️</div>
                <div className="text-m">
                    Industrial engineering student at the University of Toronto, studying <span className="font-bold">Operations Research</span>, <span className="font-bold">Data Science</span>, and <span className="font-bold">Human Factors</span>.
                </div>
                <div>
                    Currently, learning about the web remains as one of my main priorities
                    although I am trying to explore different fields. I am eager to learn more about
                    supply chain optimization and
                    is working on building a simple <Link className="underline hover:text-primary">chatbot</Link> and a <Link className="underline hover:text-primary">Godot game</Link>.
                    My progress on these projects can be found in the <Link to="/posts" className="underline">posts</Link> section.
                </div>
                <div>
                    When I'm not working you can find me taking photos with my camera, doing some quick sketches, or going around for long walks.
                    Some of my work can be found at the <Link to="/arts" className="underline">arts</Link> page.
                </div>
            </div>

            <div id="project-wrapper">
                <div className="text-3xl font-nunito font-extrabold text-teal-400">Projects</div>
            </div>

            <div id="skills-wrapper">
                <div className="font-extrabold text-3xl font-nunito text-teal-400">Technical Skills</div>
                <div className="text-font_dark flex transition ease-in-out delay-300" >
                    <BiLogoJavascript className=" hover:text-korean_umber duration-700" size={50} />
                    <BiLogoPython className=" hover:text-korean_yellow duration-700" size={50} />
                    <BiLogoJava size={50} className=" hover:text-korean_orange duration-700" />
                    <BiLogoReact size={50} className=" hover:text-korean_oak duration-700" />
                    <BiLogoHtml5 className=" hover:text-korean_orange duration-700" size={50} />
                    <BiLogoCss3 className=" hover:text-korean_blue duration-700" size={50} />
                    <BiLogoTailwindCss className=" hover:text-korean_lightblue duration-700" size={50} />
                    <BiLogoNodejs size={50} className=" hover:text-korean_yellowgreen duration-700" />
                    <BiLogoMongodb size={50} className=" hover:text-green-400 duration-700" />
                </div>
            </div>

            {/* <div id="contacts-wrapper" className="flex-col text-base sm:text-xl">
                    <div>
                        github: <a href="https://github.com/sehyunlee217">/sehyunlee217</a>
                    </div>
                    <div>
                        linked-in: <a href="https://www.linkedin.com/in/joe-lee-0953a215a/">/joelee</a>
                    </div>
                    <div>
                        read-cv: <a href="https://read.cv/sehyunlee217">/seunghyunlee</a>
                    </div>
                    <div>
                        email: <a className="hover:cursor-pointer" onClick={(e) => { window.location.href = 'mailto:leeseunghyun217@gmail.com'; }}>leeseunghyun217@gmail.com</a>
                    </div>
                </div> */}



            <div id="posts-wrapper">
                <div className="text-3xl font-nunito font-extrabold text-teal-400">Posts</div>
                <div className="flex justify-center align-middle w-[550px]">
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
                <img className="max-w-[450px] pt-20 pb-5" src={profilePic}></img>
            </div>
        </div >
    );
}



