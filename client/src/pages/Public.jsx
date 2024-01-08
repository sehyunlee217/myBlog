import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoPython, BiLogoNodejs, BiLogoJava, BiLogoMongodb, BiLogoGithub, BiLogoLinkedinSquare, BiBookContent } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";

import Clock from "../components/clock";
import Post from "../components/Post";
import profilePic from "../img/profile.jpeg";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://107.20.51.100/post', {
            method: 'GET',
            credentials: "include"
        }).then(
            res => { res.json().then(posts => { setPosts(posts); }); }
        );
    }, []);

    return (
        <div id='public-container' className='flex justify-center'>
            <div className="flex flex-col max-w-2xl w-full gap-5 sm:gap-10 md:gap-15">
                <div id="info-wrapper" className="flex flex-col gap-6">
                    <div className="text-3xl font-bold font-nunito"><span className=" text-teal-400">Hi,</span> I'm Joe 👷‍♂️</div>
                    <div className="">
                        Industrial engineering student at the University of Toronto, studying <span className="font-bold">Operations Research</span>, <span className="font-bold">Data Science</span>, and <span className="font-bold">Human Factors</span>.
                    </div>
                    <div>
                        Learning about the web is one of my main priorities
                        although I am trying to explore different fields. I am eager to learn more about
                        supply chain optimization and is currently working on building <Link className="underline hover:text-primary">projects</Link> and a <Link className="underline hover:text-primary">Godot game</Link> by next summer.
                        My progress on these <Link className="underline hover:text-primary">projects</Link> can be found in the <Link to="/posts" className="underline">posts</Link> section.
                    </div>
                    <div>
                        When I'm not working you can find me taking photos with my camera, doing some quick sketches, or going for long walks.
                        My work can be found at the <Link to="/arts" className="underline">arts</Link> page.
                    </div>
                </div>

                <div id="project-wrapper">
                    <div className="text-2xl sm:text-3xl font-nunito font-extrabold text-teal-400">Projects</div>
                </div>

                <div id="project-wrapper">
                    <div className="text-2xl sm:text-3xl font-nunito font-extrabold text-teal-400 pb-2">Contact</div>
                    <div className="font-nunito flex flex-wrap sm:flex-nowrap">
                        <div className="w-full">
                            <img className="w-full rounded-md shadow-xl" src={profilePic}></img>
                        </div>
                        <div className="flex w-full flex-row justify-between pt-3 sm:pt-0 sm:flex-col sm:pl-2 sm:justify-between sm:items-start">
                            <a href="https://github.com/sehyunlee217" className="flex gap-4 justify-center items-center hover:text-teal-500">
                                <BiLogoGithub size={25} />
                                <span className="hidden sm:flex">Github</span>
                            </a>
                            <a href="https://www.linkedin.com/in/joe-lee-0953a215a/" className="flex gap-4 justify-center items-center hover:text-teal-500">
                                <BiLogoLinkedinSquare size={25} />
                                <span className="hidden sm:flex">Linked-In</span>
                            </a>
                            <a href="https://read.cv/sehyunlee217" className="flex gap-4 justify-center items-center hover:text-teal-500">
                                <BiBookContent size={25} />
                                <span className="hidden sm:flex">read.cv</span>
                            </a>
                            <a href="./directory/yourfile.pdf" download="SeunghyunLee_Resume" className="hover:cursor-pointer flex gap-4 justify-center items-center hover:text-teal-500">
                                <FaFilePdf size={25} />
                                <span className="hidden sm:flex">Cover Letter</span>
                            </a>
                            <a className="hover:cursor-pointer flex gap-4 justify-center items-center hover:text-teal-500" onClick={(e) => { window.location.href = 'mailto:leeseunghyun217@gmail.com'; }}>
                                <MdOutlineEmail size={25} />
                                <span className="hidden sm:flex">leeseunghyun217@gmail.com</span>
                            </a>
                        </div>
                    </div>

                </div>

                <div id="skills-wrapper">
                    <div className="font-extrabold text-2xl sm:text-3xl font-nunito text-teal-400 pb-2">Technical Skills</div>
                    <div className="text-font_dark flex justify-between transition ease-in-out delay-300" >
                        <BiLogoJavascript className=" hover:text-korean_umber duration-700" size={50} />
                        <BiLogoPython className=" hover:text-korean_yellow duration-700" size={50} />
                        <BiLogoJava size={50} className=" hover:text-korean_orange duration-700" />
                        <BiLogoNodejs size={50} className=" hover:text-korean_yellowgreen duration-700" />
                        <BiLogoReact size={50} className=" hover:text-korean_oak duration-700" />
                        <BiLogoHtml5 className=" hover:text-korean_orange duration-700" size={50} />
                        <BiLogoCss3 className=" hover:text-korean_blue duration-700" size={50} />
                        <BiLogoTailwindCss className=" hover:text-korean_lightblue duration-700" size={50} />
                        <BiLogoMongodb size={50} className=" hover:text-green-400 duration-700" />
                    </div>
                </div>

                <div id="post-wrapper" className="flex flex-col justify-center">
                    <div className="text-2xl sm:text-3xl font-nunito font-extrabold text-teal-400 pb-2">Posts</div>
                    <div className="grid grid-cols-1 max-w-lg w-full pb-20 gap-6">
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

            </div >
        </div >
    );
}



