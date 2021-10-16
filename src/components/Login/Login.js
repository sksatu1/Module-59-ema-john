import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import "./Login.css"

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div className="form-container">
            <div>
                <h2>Log In</h2>
                <form>
                    <input type="email" placeholder="your email" />
                    <br />
                    <br />
                    <input type="password" placeholder="your password" />
                    <br />
                    <br />
                    <input type="submit" value="submit" />
                </form>

                <p>New to ema-john? <Link to="/register">Create account</Link></p>
                <div>--------------------or---------------------</div>
                <button className="btn-regular" onClick={signInUsingGoogle}>login</button>
            </div>
        </div>
    );
};

export default Login;