import React from 'react';
import { useState } from 'react';
import { createUser } from '../../services/users.service';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [user, setUser] = useState({});
    const [token, setToken] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
 

    const onCreate = async (e) => {

        e.preventDefault();

        try {
            const response = await createUser({
               ...user
            });    
            
            navigate('/users');

            /*
            const { data, problem } = response.data;

            if (problem) {
                setError(problem.message);
            } else {
                //setToken(data.token);
                setError(null);
                console.log("New user created!");
            }

            console.log(token);

            */


        } catch(error) {
            console.log("error: ", error);
        }

    }

    return (
        <div>
            <form action="">      
                <input type="text" name='firstName' placeholder='First Name'onChange={handleChange}/>
                <input type="text" name='lastName' placeholder='Last Name'onChange={handleChange}/>   
                <input type="number" name='age' placeholder='Age'onChange={handleChange}/>       
                <input type="email" name='email' placeholder='Email'onChange={handleChange}/>
                <input type="password" name='password' placeholder='Password'onChange={handleChange}/>
                
                {/* <button type='submit' onClick={onCreate}>Register</button> */}
                <button onClick={onCreate}>Register</button>
                {error ? <p>{error}</p> : <h4>{token}</h4>}
            </form>
        </div>
    )
}

export default Register;
