import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../services/users.service';


const ShowUser = () => {

    const { id } = useParams();
    const [user, setUser] = useState({});

    const onGetUserById = async () => {
        const response = await getUserById({ id });
        setUser(response?.data?.data);
    };

    useEffect( ()=>{
        onGetUserById();
    }, [id])

  return (
    <div>
        <h1>id: {user?.id}</h1>
        <h1>First Name: {user?.firstName}</h1>
        <h1>Last Name: {user?.lastName}</h1>
        <h1>Age: {user?.age}</h1>
        <h1>Email: {user?.email}</h1>
        <h1>Password: {user?.password}</h1>
        <h1>Created At: {user?.createdAt}</h1>
        <h1>Enabled: {user?.enabled}</h1>
    </div>
  )
};

export default ShowUser;
