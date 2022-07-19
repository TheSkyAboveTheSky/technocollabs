import axios from 'axios';
import React, { Component } from 'react';
import './Login.css';
import logo from './img-01.png';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            authorized: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let { data } = await axios.post('http://localhost:3000/auth', {
                email: this.state.email,
                password: this.state.password
            });
            if (data.message === 'success') {
                localStorage.setItem('accessToken', data.accessToken);
                // localStorage.setItem('roles', data.roles);
                // localStorage.setItem('name', data.name);
                // localStorage.setItem('email', data.email);
                if (data.roles.includes("0000")) {
                    this.props.history.replace('/unAuthorized');
                }
                else {
                    this.props.history.replace('/home');
                }
            } else {
                alert('Invalid credentials');
            }
        }
        catch (error) {
            alert('Invalid credentials');
        }

    }

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src={logo} alt="IMG" className='fix-image' />
                        </div>

                        <form onSubmit={this.handleSubmit} className="login100-form validate-form">
                            <span className="login100-form-title">
                                Login
                            </span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button type="submit" className="login100-form-btn">
                                    Login
                                </button>
                            </div>

                            {/* <div className="text-center p-t-12">
                                <span className="txt1">
                                    Forgot
                                </span>
                                <a className="txt2" href="#">
                                    Username / Password?
                                </a>
                            </div> */}

                            <div className="text-center p-t-136">
                                <a className="txt2" href="register">
                                    Create your Account
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default Login;