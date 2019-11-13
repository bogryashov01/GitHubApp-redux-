import React, { Component }from "react";
import { connect } from 'react-redux';
import Followers from "../components/followers/Followers";
import {getUserActionCreator} from '../actions/user';
import { bindActionCreators } from 'redux';
import history from '../navigation/history';


class FollowersComponent extends Component {   
    constructor(props) {
        super(props);
        this.state = {
        };
    }

  onButtonClick = (e,login) =>{
      e.preventDefault();
    const {getUser} = this.props;
    getUser(login);
    
}
render(){
    const {followers,onClick} = this.props
 return(
     <div>
    <Followers followers ={followers} onClick={onClick}/>
     </div>
 )
}
}
const mapStateToProps = (state) => {
    return {
        followers: state.getFollowers.followers,
        user: state.getUserInfo.data,
        }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        getUser: bindActionCreators(getUserActionCreator, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(FollowersComponent)