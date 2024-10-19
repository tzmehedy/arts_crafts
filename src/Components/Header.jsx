import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/arts_crafts_images01.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dummyUserImage from "../../src/assets/images/istockphoto-1337144146-612x612.jpg"


const Header = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [theme, setTheme] = useState();

  
  const handelLogout = () =>{
    userLogout()
    .then(result=>{
      toast("Logout Successfully")
    })
    .catch(error=>{
      console.log(error)
    })
  }


  const handelTheme = (e) =>{
    if(e.target.checked){
      setTheme("retro")
    }
    else{
      setTheme("light")
    }
  }

  useEffect(()=>{
    localStorage.setItem("theme",theme)
    const localStorageTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localStorageTheme)
  },[theme])
    const navLinks = (
      <>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/allArtsAndCrafts"}>All Art & craft Items</NavLink>
        </li>
        <li>
          <NavLink to={"/addCraftItem"}>Add Craft Item</NavLink>
        </li>
        <li>
          <NavLink to={"/myArtCraftList"}>My Art&Craft List</NavLink>
        </li>
        
      </>
    );
    return (
      <div className="w-full shadow-lg fixed z-10">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow font-bold"
              >
                {navLinks}
              </ul>
            </div>
            <Link>
              <img className="w-full h-7 md:h-16" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">{navLinks}</ul>
          </div>
          <div className="navbar-end space-x-2">
            {user ? (
              <>
                <img
                  className="w-10 h-10 rounded-full"
                  title={user.displayName}
                  src={user.photoURL ? user.photoURL : dummyUserImage}
                  alt=""
                />
                <button
                  onClick={handelLogout}
                  className="btn btn-secondary text-black font-bold"
                >
                  LogOut
                </button>
              </>
            ) : (
              <Link
                to={"/login"}
                className="btn btn-secondary text-black font-bold"
              >
                LogIn
              </Link>
            )}
          </div>

          <label className="grid cursor-pointer place-items-center ml-2">
            <input
              type="checkbox"
              onChange={handelTheme}
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    );
};

export default Header;