import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import SocailLogin from '../shared/SocailLogin';
import Swal from 'sweetalert2';

const Login = () => {
    const { singIN } = useContext(AuthContext)
    const location =useLocation()
    const navigate =useNavigate()
    const from = location.state || '/'
    const handleLogin = e => {

        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        //  login
        singIN(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from)
                Swal.fire({
                    title: "Login successfully",
                    icon: "success",
                    draggable: true
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                })
                // ..
            });

    }
    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">

                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email"
                                required />

                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />
                            <div><a className="link link-hover">Forgot password?</a></div>

                            <button type='submit' className="btn btn-neutral mt-3">Login</button>

                            <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link className='text-secondary' to={"/register"}> Register</Link></p>



                            <SocailLogin from={from}></SocailLogin>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;