import React, { useState , useEffect } from 'react';
import './users.css';
import { FaCheck } from 'react-icons/fa';
const Users = () => {
    const [users, setUsers] = useState([]);
    const [selectedUsersId, setSelectedUsersId] = useState([]);

    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/'+'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
            .then(response => response.json())
            .then((data) => setUsers(data));
    },[]);

    const checkUser = (id) => {
        if (selectedUsersId.includes(id)) {
            setSelectedUsersId(selectedUsersId.filter(e=>(e!==id)));
        }
        else {
            setSelectedUsersId((prev) => ([...prev, id]));
        }
    }

    const ascending = () => {
        setUsers(users.sort((a, b) => (a.name.localeCompare(b.name))));
        checkUser(null);
    }
    const descending = () => {
        setUsers(users.sort((a, b) => (b.name.localeCompare(a.name))));
        checkUser(null);
    }

    return (
        <div id="user-container">
            <button type="button" onClick={ascending}>Sort names - Ascending</button><br /><br />
            <button type="button" onClick={descending}>Sort names - Descending</button>
            <div id="user-wrapper">
                {users.map((user) =>
                    <div className="user" id={user.id} onClick={() => checkUser(user.id)} >
                        {selectedUsersId.includes(user.id) && < div id="check"><FaCheck /></div>}
                        <img src={ user.Image } alt="User" />
                        <div className="user-name-wrapper"><span>{ user.name }</span></div>
                    </div>
                )}
            </div>
        </div>

    );
}

export default Users;