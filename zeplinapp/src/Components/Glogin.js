import './Glogin.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { AUTH_ACTION, PROFILE_ACTION} from '../actions/actionfile';


import googleConfig from '../config/google-login.json';

class Login extends React.Component {

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            this.props.dispatch({
                type: AUTH_ACTION.LOGIN,
                payload: user.token
            });
            this.props.dispatch({
                type: PROFILE_ACTION.SET,
                payload: user.userData
            });
        }
    }

    googleCallback = (response) => {
        if(!response || !response.accessToken) {
            alert("Sorry, Google signin has failed. Please try again");
            return;
        }
        const user = {
            token: response.accessToken,
            userData: response.profileObj
        }
        localStorage.setItem('user',JSON.stringify(user));
        this.props.dispatch({
            type: AUTH_ACTION.LOGIN,
            payload: user.token
        });
        this.props.dispatch({
            type: PROFILE_ACTION.SET,
            payload: user.userData
        });
        this.props.history.push("/");
    }

    logout = () => {
        localStorage.removeItem('user');
        this.props.dispatch({ type: AUTH_ACTION.LOGOUT });
        this.props.dispatch({ type: PROFILE_ACTION.RESET });
        this.props.history.push("/login");
    }

    render(){
        console.log(this.props);
        return (
            <>
                <div className="topnav">
                    <div style={{width:"350px",textAlign:"center"}}>
                        {
                            this.props.auth.isAuthenticated &&
                            <>
                                <Link to={'/profile'}>{this.props.profileName}</Link>
                                <GoogleLogout
                                    clientId={googleConfig.web.client_id}
                                    buttonText="Logout"
                                    onLogoutSuccess={this.logout}
                                />
                            </>
                        }
                        {
                            !this.props.auth.isAuthenticated &&
                            <GoogleLogin 
                                clientId={googleConfig.web.client_id}
                                onSuccess={this.googleCallback}
                                onFailure={this.googleCallback}
                                buttonText="Login"
                                isSignedIn={true}
                            />
                        }
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        profileName: state.profile.name
    }
}

export default connect(mapStateToProps)(Login);