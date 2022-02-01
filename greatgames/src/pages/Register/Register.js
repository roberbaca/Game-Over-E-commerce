import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const [token, setToken] = useState("");
    const [error, setError] = useState(null);

    const baseURL = 'http://localhost:3100/api'

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeAge = (e) => {
        setAge(e.target.value);
    }

    const handleClick = async (e) => {

        e.preventDefault();

        try {
            const response = await axios.post(`${baseURL}/register`, {
                email,
                password,
                age
            });

            const { data, problem } = response.data;

            if (problem) {
                setError(problem.message);
            } else {
                setToken(data.token);
                setError(null);
                console.log("New user created!");
            }

            console.log(token);

        } catch(error) {
            console.log("error: ", error);
        }

    }

    return (
        <div>
            <form action="">                
                <input type="email" placeholder='email'onChange={handleChangeEmail} value={email}/>
                <input type="password" placeholder='password'onChange={handleChangePassword} value={password}/>
                <input type="number" placeholder='age'onChange={handleChangeAge} value={age}/>
                <button type='submit' onClick={handleClick}>Register</button>
                {error ? <p>{error}</p> : <h4>{token}</h4>}
            </form>
        </div>
    )
}

export default Register;
