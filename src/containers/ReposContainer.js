import React from "react";
import { connect } from 'react-redux';
import Repos from "../components/repos/Repos";

const ReposComponent = (props) =>{
 const {repos} = props;

 return(
     <div>
    <Repos repos={repos} />
     </div>
 )
}
const mapStateToProps = (state) => {
    return {
        repos: state.getReposInfo.repositories,
        }
};
export default connect(
    mapStateToProps,
    )(ReposComponent)