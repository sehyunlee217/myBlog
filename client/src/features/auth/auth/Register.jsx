import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(e) {
        e.preventDefault();
        await fetch('http://localhost:3500/auth/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
    }

    return (
        <div className='flex justify-center my-36 mx-40'>
            <form className='flex flex-col gap-2 align-middle p-8 border-2 rounded-md w-full' onSubmit={register}>
                <input type='text'
                    className='border-2 p-2 rounded-md'
                    placeholder='username'
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                <input type='password'
                    className='border-2 p-2 rounded-md'
                    placeholder='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <button className='border-2 p-2 rounded-md bg-orange-200 hover:bg-orange-400'>Register</button>
            </form>
        </div>
    );
}

export default Register;