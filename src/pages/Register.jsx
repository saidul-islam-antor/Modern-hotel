import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleSingUP =e=>{
        e.preventDefault()
        const form=e.target;
        const email =form.email.value;
        const password=form.password.value;
        const  photo =form.photo.value;
        const name=form.name.value;
        console.log(email,password,photo,name)
    }
    return (
           <div>
            <div>
                <div className='flex justify-center min-h-screen items-center'>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                        <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
                        <form onSubmit={handleSingUP} className="card-body">
                            <fieldset className="fieldset">

                                {/* Name */}
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" required />


                                {/* Photo URL */}
                                <label className="label">Photo URL</label>
                                <input type="text" name='photo' className="input" placeholder="Photo URL" required />


                                {/* email */}

                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" required />

                                {/* password */}
                                <label> password</label>
                                <label className="input validator">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                            ></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                        </g>
                                    </svg>
                                    <input
                                        type="password"
                                        name='password'
                                        required
                                        placeholder="Password"
                                        minlength="6"
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                    />
                                </label>
                                <p className="validator-hint hidden">
                                    Must be more than 8 characters, including
                                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                                </p>



                                <button type='submit' className="btn btn-neutral mt-4">Register</button>

                                <p className='font-semibold text-center pt-5'>Already Have An Account ?
                                    <Link className='text-secondary' to={"/login"}> Login</Link></p>
                                {/* <button onClick={handleGoogleSingIN} className="btn bg-white  border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google

                                </button> */}
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;