import React, { useState } from 'react';
import './header.css';
const Header = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState('https://s3-ap-southeast-1.amazonaws.com/he-public-data/user14b9a23c.png');

    const updateName = (event) => {
        setName(event.target.value);
    }

    const updateDescription = (event) => {
        setDescription(event.target.value);
    }

    const fileUpdate = (event) => {
        setImageFile(URL.createObjectURL(event.target.files[0]));
    }

    return (
        <div id="header-wrapper">
            <h1>Create Group</h1>
            <div id="input-wrapper">
                <div id="img-file">
                    <label for="file"><img id="img-logo" src={ imageFile } alt="Logo" /><br/>Group Logo</label>
                    <input id="file" type="file" style={{ display: "none" }} accept="image/*" onChange={ fileUpdate }/>
                </div>
                <div id="input-fields">
                    <div id="name-field">
                        <label for="name">Name</label>
                        <input id="name" type="text" placeholder="Group Name" onChange={ updateName } />
                    </div>
                    <div id="description-field">
                        <label for="description">Description</label>
                        <input id="description" type="text" placeholder="Group Description" onChange={updateDescription} />
                    </div>
                    
                </div>
            </div>
            <h2>Group Name : { name }</h2>
            <h2>Group Description : { description }</h2>
        </div>
    );
}

export default Header