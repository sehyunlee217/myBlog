import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../../components/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState('');
    const { setUserInfo } = useContext(UserContext);

    async function login(e) {
        e.preventDefault();
        const res = await fetch('http://localhost:3500/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });

        if (res.ok) {
            res.json().then(username => {
                setUserInfo(username);
            });
            setLoggedIn(true);
        }
        else {
            alert("invalid login");
        }
    }

    if (loggedIn) {
        return <Navigate to={'/'} />;
    }

    return (
        <div className='flex justify-center my-36 mx-40'>
            <form className='flex flex-col gap-2 align-middle p-8 border-2 rounded-md sm:w-1/2 min-w-[400px]' onSubmit={login}>
                <input type='text'
                    className='border-2 p-2 rounded-md'
                    placeholder='username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}></input>
                <input type='password'
                    className='border-2 p-2 rounded-md'
                    placeholder='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}></input>
                <button className='border-2 p-2 rounded-md bg-primary bg-opacity-30 hover:bg-opacity-70 hover:text-white'>Login</button>
                {/* <div className='flex justify-center text-sm underline'><Link to="/auth/register">Register</Link></div> */}
            </form>
        </div>
    );
}

export default Login;