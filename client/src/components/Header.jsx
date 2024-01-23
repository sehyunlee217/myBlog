import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Navbar() {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const [createBtn, setCreateBtn] = useState(false);

    useEffect(() => {
        fetch('https://myblogapi-410916.ue.r.appspot.com/auth/login', {
            method: 'GET',
            credentials: "include"
        }).then(res => {
            if (res.status == 403) {
                // not logged in so userinfo is still null
                // forbidden response
                console.clear();
            }
            else {
                res.json().then(info => {
                    setUserInfo(info);
                });
            }
        });
    }, []);

    function logout() {
        fetch('https://myblogapi-410916.ue.r.appspot.com/auth/logout', {
            method: 'POST',
            credentials: "include"
        });
        setUserInfo(null);
    }

    function toggleBtn(e) {
        e.preventDefault();
        setCreateBtn(!createBtn);
    }

    return (
        <nav id="nav" className="flex justify-between font-bold p-4">
            <div className=" border-2 px-1 pt-[2px] rounded-md border-emp_dark shadow-lg text-blue-950 dark:text-korean_oak hover:text-emp_dark font-korean text-4xl">
                <Link to="/">죠</Link>
            </div>
            <div className="flex font-bold gap-3 font-abril text-blue-950 dark:text-slate-50 items-center">
                <div className="hover:text-emp_dark">
                    <Link to="/projects">projects</Link>
                </div>
                <div className="hover:text-emp_dark">
                    <Link to="/posts">posts</Link>
                </div>
                <div className="hover:text-emp_dark">
                    <Link to="/arts">arts</Link>
                </div>
                {
                    userInfo && (
                        <div className="flex gap-3">
                            <div onClick={toggleBtn} className="hover:text-emp_dark">
                                <Link>create</Link>
                                {
                                    createBtn && (
                                        <div className="flex flex-col absolute">
                                            <Link to="auth/create/post">posts</Link>
                                            <Link to="auth/create/art">art</Link>
                                            <Link to="auth/create/project">project</Link>
                                        </div>
                                    )
                                }
                            </div>
                            <Link className="hover:text-red-800" onClick={logout}>logout</Link>
                        </div>
                    )
                }
                {!userInfo && (
                    <div className="hover:text-emp_dark">
                        <Link to="/auth">login</Link>
                    </div>
                )}
            </div>
        </nav >
    );
}
