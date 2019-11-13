import React, { Component } from 'react';
import  Tabs from '../components/tabs/Tabs';
import history from '../navigation/history';
import { connect } from 'react-redux';
import {getReposActionCreator} from '../actions/repos';
import { bindActionCreators } from 'redux';
import Spinner from '../components/spinner/Spinner';
import {getFollowersActionCreator} from '../actions/followers';


class TabsContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        };
    }
    onSelect = currentTabIndex => {
        const { getRepos, userName,getFollower} = this.props;
        debugger
        
        if (currentTabIndex === 0) {
            history.push(`/${userName}/profile`);
        }
        if (currentTabIndex === 1) {
            getRepos(userName)
            history.push(`/${userName}/repos`);       
        }
        if (currentTabIndex === 2) { 
            getFollower(userName)
            history.push(`/${userName}/followers`);        
        }
        this.setState({
          tabIndex: currentTabIndex
        });
    }
    changeTabIndex = () => {
        debugger
         this.setState({
             tabIndex: 0,
         })
    }
    render() {
        const { loading } = this.props;
        console.log('tabIndex', this.state.tabIndex)
        return(
            <div>
                {loading && <Spinner />}
                {!loading && <Tabs tabIndex={this.state.tabIndex} onSelect={this.onSelect} onClick={this.changeTabIndex}/> }
                
            </div>
        )
    }
    
}
const mapStateToProps = (state) => {
    return {
        userName: state.getUserInfo.data.login,
        loading: state.app.loading,
        }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getRepos: bindActionCreators(getReposActionCreator, dispatch),
        getFollower: bindActionCreators(getFollowersActionCreator, dispatch)
    }
}
export default connect(
mapStateToProps,
mapDispatchToProps
)(TabsContainer)