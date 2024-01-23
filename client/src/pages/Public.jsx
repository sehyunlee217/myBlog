import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoPython, BiLogoNodejs, BiLogoJava, BiLogoMongodb, BiLogoGithub, BiLogoLinkedinSquare, BiBookContent } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";

import Post from "../components/Post";
import profilePic from "../img/profile.jpeg";
import resume from "../files/resume.pdf";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://api.shyun.dev/post', {
            method: 'GET', // 
            credentials: "include"
        }).then(
            res => { res.json().then(posts => { setPosts(posts); }); }
        );
    }, []);

    return (
        <div id='public-container' className='flex justify-center'>
            <div className="flex flex-col max-w-2xl w-full gap-12 sm:gap-16 ">
                <div id="info-wrapper" className="flex flex-col gap-6">
                    <div className="flex flex-col justify-center items-center gap-8 sm:flex-row tracking-tighter ">
                        <div className="text-7xl font-bold font-abril sticky top-14 mix-blend-difference "><span className="text-korean_oak sm:text-9xl font-extrabold shadow-2xl">Joe.</span></div>
                        <div className="">
                            Industrial engineering student at the University of Toronto, studying <span className="font-bold">Operations Research</span>, <span className="font-bold">Data Science</span>, and <span className="font-bold">Human Factors</span>.
                        </div>
                    </div>
                    <div>
                        Learning about the web is one of my main priorities
                        although I am trying to explore different fields. I am eager to learn more about
                        supply chain optimization and data analysis. I am currently working on <Link to="/projects" className="underline font-bold">projects</Link> alongside my courseload.
                        My progress on these <Link to="/projects" className="underline font-bold">projects</Link> can be found in the <Link to="/posts" className="underline font-bold">posts</Link> section.
                    </div>
                    <div>
                        When I'm not working, you can find me taking photos with my camera, drawing some quick sketches, or going for long walks.
                        My work can be found at the <Link to="/arts" className="underline font-bold">arts</Link> page.
                    </div>
                </div>

                <div id="contact-wrapper">
                    <div className="text-3xl sm:text-4xl font-abril font-bold text-gray-950 dark:text-slate-50 pb-2 underline opacity-80">Contacts.</div>
                    <div className="font-nunito flex flex-wrap sm:flex-nowrap">
                        <div className="w-full">
                            <img className="w-full shadow-xl max-h-40 object-cover" src={profilePic}></img>
                        </div>
                        <div className="flex w-full flex-row justify-between pt-3 sm:pt-0 sm:flex-col sm:pl-2 sm:justify-between sm:items-start">
                            <a href="https://github.com/sehyunlee217" className="flex gap-4 justify-center items-center hover:text-emp_dark">
                                <BiLogoGithub size={25} />
                                <span className="hidden sm:flex">Github</span>
                            </a>
                            <a href="https://www.linkedin.com/in/joe-lee-0953a215a/" className="flex gap-4 justify-center items-center hover:text-emp_dark">
                                <BiLogoLinkedinSquare size={25} />
                                <span className="hidden sm:flex">Linked-In</span>
                            </a>
                            <a href="https://read.cv/sehyunlee217" className="flex gap-4 justify-center items-center hover:text-emp_dark">
                                <BiBookContent size={25} />
                                <span className="hidden sm:flex">read.cv</span>
                            </a>
                            <a href={resume} download="Seunghyun(Joe)_Lee_CV.pdf" className="hover:cursor-pointer flex gap-4 justify-center items-center hover:text-emp_dark">
                                <FaFilePdf size={25} />
                                <span className="hidden sm:flex">Resume</span>
                            </a>
                            <a className="hover:cursor-pointer flex gap-4 justify-center items-center hover:text-emp_dark" onClick={(e) => { window.location.href = 'mailto:sehyun.lee@mail.utoronto.ca'; }}>
                                <MdOutlineEmail size={25} />
                                <span className="hidden sm:flex">sehyun.lee@mail.utoronto.ca</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="skills-wrapper">
                    <div className="font-bold text-3xl sm:text-4xl font-abril text-gray-950 dark:text-slate-50 pb-2 underline opacity-80">Skills.</div>
                    <div className="opacity-80 flex justify-between transition ease-in-out delay-300" >
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


                <div id="project-wrapper">
                    <Link to="/projects" className=" cursor-pointer">
                        <div className="text-3xl sm:text-4xl font-abril font-bold hover:text-korean_oak text-gray-950 dark:text-slate-50 underline opacity-80">Projects.</div>
                    </Link>
                </div>

                <div id="post-wrapper" className="flex flex-col justify-center">
                    <Link to="/posts" className=" cursor-pointer">
                        <div className=" text-3xl sm:text-4xl font-abril font-bold text-gray-950 dark:text-slate-50 pb-2 underline opacity-80 hover:text-korean_oak">Posts.</div>
                    </Link>

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



