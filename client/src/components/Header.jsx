import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Navbar() {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const [createBtn, setCreateBtn] = useState(false);

    useEffect(() => {
        fetch('https://shyun.dev/auth/login', {
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
        fetch('https://shyun.dev/auth/logout', {
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
        <nav id="nav" className="flex justify-between text-gray-400  font-nunito font-bold p-4">
            <div className=" text-teal-400 hover:text-orange-400 font-korean text-4xl">
                <Link to="/">죠</Link>
            </div>
            <div className="flex gap-3 ">
                <div className="hover:text-gray-800">
                    <Link to="/projects">projects</Link>
                </div>
                <div className="hover:text-gray-800">
                    <Link to="/posts">posts</Link>
                </div>
                <div className="hover:text-gray-800">
                    <Link to="/arts">arts</Link>
                </div>
                {
                    userInfo && (
                        <div className="flex gap-3">
                            <div onClick={toggleBtn} className="hover:text-gray-800">
                                <Link>create</Link>
                                {
                                    createBtn && (
                                        <div className="flex flex-col absolute">
                                            <Link to="auth/create/post">posts</Link>
                                            <Link to="auth/create/art">art</Link>
                                        </div>
                                    )
                                }
                            </div>
                            <Link className="hover:text-red-800" onClick={logout}>logout</Link>
                        </div>
                    )
                }
                {!userInfo && (
                    <div className="hover:text-gray-800">
                        <Link to="/auth">login</Link>
                    </div>
                )}
            </div>
        </nav >
    );
}
