import React, { useState } from 'react';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handelRegister = (e) =>{
        e.preventDefault()

        setErrorMessage("")
        

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value

        if (!/[A-Z]/.test(password)) {
            setErrorMessage("The password should be Uppercase")
            return
        }

        else if(!/[a-z]/.test(password)){
            setErrorMessage("The password should be Lowercase")
            return
        }

        else if(password.length<6){
            setErrorMessage("The password should be at least 6 character")
            return
        }     
    }
    return (
      <div>
        <div className=" bg-base-200 min-h-screen">
          <div className=" flex flex-col justify-center items-center">
            <div className="mb-5">
              <h1 className="text-5xl font-bold">Register Now!</h1>
            </div>
            <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="flex relative">
                    <input
                      type={ showPassword ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered w-full"
                    />

                    <span onClick={()=>setShowPassword(!showPassword)} className="absolute right-2 top-4 cursor-pointer">
                      {showPassword ? (
                        <FaRegEyeSlash></FaRegEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </span>
                  </div>

                  <p className="text-red-600 font-bold">{errorMessage}</p>

                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />

                  <label className="label">
                    <p className="label-text-alt">
                      Are you already register? Please{" "}
                      <Link
                        to={"/login"}
                        className="underline text-purple-950 font-bold"
                      >
                        Login
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    onClick={handelRegister}
                    className="btn bg-pink-500 text-black font-bold"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;