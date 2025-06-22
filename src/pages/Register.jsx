import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import SocailLogin from '../shared/SocailLogin';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleSingUP =e=>{
        e.preventDefault()
        const form=e.target;
        const email =form.email.value;
        const password=form.password.value;
        const  photo =form.photo.value;
        const name=form.name.value;
        console.log(email,password,photo,name)

createUser(email,password)
        .then(result=>{
            console.log(result.user)
            
Swal.fire({
  title: "Account Created!",
  icon: "success",
  draggable: true
});
        })
          .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
})
  });

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
                                <SocailLogin></SocailLogin>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;