import React from 'react';
import './style.css';
const Profile = (props) =>{
    const {name, img,bio} = props;
    return(
        <div className="profile_content">
          <h1>{name}</h1>
          <img src={img} alt="profile"/>
        <h4>{bio}</h4>
        </div>
    )
}
export default Profile;