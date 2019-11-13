import React, { Component } from 'react';
import Header from '../components/ header/header';
import { connect } from 'react-redux';
import {getUserActionCreator} from '../actions/user';
import { bindActionCreators } from 'redux'
import {setBurger} from '../actions/app';

class HeaderConteiner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    onInputChange = (event) => {
    this.setState({name:event.target.value});
    }

    onButtonClick = () =>{
        const {getUser, history} = this.props;
        const {name} = this.state;
        getUser(name);
        if(name){ history.push(`/${name}/profile`)}
    }

    handleKeyPress = (e) =>{
        if(e.charCode===13){
        e.preventDefault();
       this.onButtonClick();

        } 
      }
    render() {
        const { user,toggleAction } = this.props;
        return(
            <div>
            <Header onChange={this.onInputChange} value={this.state.name} onKeyPress={this.handleKeyPress} toggle={toggleAction} onClick={this.onButtonClick} loading={user.loading}/>
            </div>
        )
    }   
}
const mapStateToProps = (state) => {
    return {
        user: state.getUserInfo,
        }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUser: bindActionCreators(getUserActionCreator, dispatch),
        toggleAction: bindActionCreators(setBurger, dispatch)
    }
}
export default connect(
mapStateToProps,
mapDispatchToProps
)(HeaderConteiner)