import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
                    name= "name"
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
                    name= "email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name= "pssword"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name= "photo"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
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
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;