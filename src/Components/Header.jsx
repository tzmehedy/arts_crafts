import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/arts_crafts_images01.png"


const Header = () => {
    const navLinks = (
      <>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/allArtCart'}>All Art & craft Items</NavLink>
        </li>
        <li>
          <NavLink to={'/addCartItem'}>Add Craft Item</NavLink>
        </li>
        <li>
          <NavLink to={'/myArtCraftList'}>My Art&Craft List</NavLink>
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <Link><img className="w-full h-16" src={logo} alt="" /></Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    );
};

export default Header;