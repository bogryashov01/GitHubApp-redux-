import React from "react";
import { connect } from 'react-redux';
import Profile from "../components/profile/Profile";

const ProfileComponent = (props) =>{
 const {user} = props;
 
 return(
     <div>
     <Profile name={user.data.name} img={user.data.avatar_url} bio={user.data.bio}/>
     </div>
 )
}
const mapStateToProps = (state) => {
    return {
        user: state.getUserInfo,
        }
};
export default connect(
    mapStateToProps,
    )(ProfileComponent)