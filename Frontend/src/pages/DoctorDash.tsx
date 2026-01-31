import AddAvailability from './AddAvailability'
import {User} from 'lucide-react'
import { Link } from 'react-router'
const DoctorDash = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm relative z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/doctordash">Home</Link>
              </li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul className="p-2 z-1">
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <a className="mx-2 font-bold text-2xl">MediRaksha</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/doctordash">Home</Link>
            </li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2 z-50">
                  
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/doctor">
            <div className="btn">
              <User />
              Profile
            </div>
          </Link>

        </div>
      </div>
      <AddAvailability />
      <h1>Coming Soon..</h1>

    </div>
  )
}

export default DoctorDash