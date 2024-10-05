import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {
    return (
      <div>
        <div className=" bg-base-200 min-h-screen">
          <div className=" flex flex-col justify-center items-center">
            <div className="mb-5">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
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
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <p className="label-text-alt">
                      Are you not register? Please{" "}
                      <Link
                        to={"/register"}
                        className="underline text-purple-950 font-bold"
                      >
                        Register
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6 space-y-2">
                  <button className="btn bg-pink-500 text-black font-bold">
                    Login
                  </button>
                  <button className="btn  bg-pink-500 text-black font-bold">
                    {" "}
                    <FcGoogle /> Login with Google
                  </button>
                  <button className="btn bg-pink-500 text-black font-bold">
                    {" "}
                    <FaGithub />
                    Login with Github
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;