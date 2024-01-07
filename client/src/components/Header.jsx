import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Navbar() {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const [createBtn, setCreateBtn] = useState(false);

    console.log(window.location.pathname);

    useEffect(() => {
        fetch('http://localhost:3500/auth/login', {
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
        fetch('http://localhost:3500/auth/logout', {
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
            <div className="hover:text-orange-400">
                <Link to="/">s.h.l</Link>
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
                        <div className="flex gap-3 hover:text-gray-800">
                            <div onClick={toggleBtn}>
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
                            <Link onClick={logout}>logout</Link>
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
