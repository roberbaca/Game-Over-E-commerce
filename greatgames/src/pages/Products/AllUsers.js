import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllUsers, enableUser, disableUser } from '../../services/users.service';

const AllUsers = () => {   

    const [users, setUsers] = useState([]);
    const [changed, setChanged] = useState(true);

    const navigate = useNavigate();

    const onGetUsers = async () => {
        try {
            const response = await getAllUsers();
            setUsers(response.data.data);
            console.log(response.data.data);

        } catch(error) {
            alert(error);
        }
    }

    const onCreateUser = () => {
        navigate('/register');
    }

    const showUser = ({id}) => {
        navigate(`/user/${id}`);
    }

    const enableDisableUser = async ({id , e}) => {
        const flag = e.target.checked;
        console.log(flag);

        if(flag) {
            await enableUser({id});
        } else {
            await disableUser({id});
        }

        setChanged(!changed);
    }

    useEffect( () => {
        onGetUsers();
    }, [changed]);

  return (
    <div>
            <button onClick={onCreateUser}>Register</button>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>age</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map( (u, i) => <tr key={i}>
                        <td>{u?._id}</td>
                        <td>{u?.firstName}</td>
                        <td>{u?.lastName}</td>
                        <td>{u?.age}</td>
                        <td>{u?.email}</td>
                        <td><button onClick={() => showUser({ id: u?._id})}>show</button></td>
                        <td>
                            <input
                                type='checkbox'
                                checked={u?.enabled}
                                onChange={(e) => enableDisableUser({id:u?._id, e}) }
                            />
                        </td>
                    </tr>)}
                    
                </tbody>
            </table>
    </div>
  );
};

export default AllUsers;
