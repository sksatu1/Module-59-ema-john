import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="form-container">
            <div>
                <h2>Create account</h2>
                <form>
                    <input type="email" placeholder="your email" />
                    <br />
                    <br />
                    <input type="password" placeholder="your password" />
                    <br />
                    <br />
                    <input type="password" placeholder="re-enter password" />
                    <br />
                    <br />
                    <input type="submit" value="submit" />

                    <p>Already have an account? <Link to="/login">LogIn</Link></p>

                    <div>--------------------or---------------------</div>
                </form>
            </div>
        </div>
    );
};

export default Register;