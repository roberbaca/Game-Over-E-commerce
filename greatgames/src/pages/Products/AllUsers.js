import React from 'react';
import { useState, useEffect } from 'react';
import { getAllUsers } from '../../services/users.service';

const AllUsers = () => {   

    const [users, setUsers] = useState([]);
    const [changed, setChanged] = useState(true);

    const onGetUsers = async () => {
        try {
            const response = await getAllUsers();
            setUsers(response.data.data);
            console.log(response.data.data);

        } catch(error) {
            alert(error);
        }
    }


    useEffect(()=> {
        onGetUsers()
    }, []);

  return (
    <div>

    </div>
  );
};

export default AllUsers;
