import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
import SignupLogin from '../SignupLogin/SignupLogin';
import SideBarTopics from '../SideBarTopics/SideBarTopics';
/* import { useAuth } from '../../contexts/useAuth'; */

const Navbar: React.FC = () => {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between border-b-[1px] border-bordercol h-24 ">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* LEFT - Logo */}
        <div className="flex ml-16">
          <Link to="" className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0">
            <img
              src="templogo.png"
              alt="logo"
              className="max-h-12 me-2 drop-shadow-test"
            />
          </Link>
        </div>
        {/* MIDDLE - Search Bar*/}
        <div className="mx-auto flex-row ps-0 md:flex">
          <SearchBar />
        </div>

        {/* RIGHT - Create, My Threads, Login */}
        <ul className="flex flex-row mr-16 text-sm">
          <li className="px-4">
            {/* CREATE START */}
            <button className="flex items-center gap-2 hover:text-white hover:stroke-white stroke-txtbright h-12">
              <svg
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 25.6667C20.4434 25.6667 25.6667 20.4433 25.6667 14C25.6667 7.55668 20.4434 2.33334 14 2.33334C7.55672 2.33334 2.33337 7.55668 2.33337 14C2.33337 20.4433 7.55672 25.6667 14 25.6667Z"
                  stroke="current"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 9.33334V18.6667"
                  stroke="current"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.33337 14H18.6667"
                  stroke="current"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3>Create</h3>
            </button>
            {/* CREATE END */}
          </li>
          <li className="px-4 hover:fill-white fill-txtbright">
            {/* LOGIN START */}
            <SignupLogin />
            {/* LOGIN END */}
          </li>
        </ul>
      </div>
      <SideBarTopics />
      {/* ^temp */}
    </nav>
  );
};

export default Navbar;
