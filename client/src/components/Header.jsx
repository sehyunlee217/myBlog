import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Navbar() {
    const { userInfo, setUserInfo } = useContext(UserContext);
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
            res.json().then(info => {
                setUserInfo(info);
            });
        });
    }, []);

    function logout() {
        fetch('http://localhost:3500/auth/logout', {
            method: 'POST',
            credentials: "include"
        });
        setUserInfo(null);
    }

    return (
        <nav id="nav" className="flex justify-between font-nunito font-bold p-4">
            <div>
                <Link to="/">s.h.l</Link>
            </div>
            <div className="flex gap-3">
                {/* <div>
                    <Link to="/about">about</Link>
                </div> */}
                <div>
                    <Link to="/projects">projects</Link>
                </div>
                <div>
                    <Link to="/posts">posts</Link>
                </div>
                <div>
                    <Link to="/arts">arts</Link>
                </div>
                {
                    userInfo && (
                        <>
                            <Link to="auth/create">create</Link>
                            <Link onClick={logout}>logout</Link>
                        </>
                    )
                }
                {!userInfo && (
                    <div>
                        <Link to="/auth">login</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
