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

    console.log(userInfo);

    return (
        <nav id="nav" className="flex justify-between pb-6">
            <div>
                <Link to="/">s.h.l</Link>
            </div>
            <div className="flex gap-3">
                <div>
                    <Link to="/about">about</Link>
                </div>
                <div>
                    <Link to="/posts">posts</Link>
                </div>
                <div>
                    <Link to="/projects">projects</Link>
                </div>
                <div>
                    <Link to="/creative">creative</Link>
                </div>
                {
                    userInfo && (
                        <>
                            <Link to="auth/create">Create new Post</Link>
                            <Link onClick={logout}>Logout</Link>
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
