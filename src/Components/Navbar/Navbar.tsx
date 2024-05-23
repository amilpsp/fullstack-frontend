import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
import SignupLogin from '../SignupLogin/SignupLogin';
import SideBarTopics from '../SideBarTopics/SideBarTopics';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isSignupLoginVisible, setSignupLoginVisible] = useState(false);
  const toggleSignupLogin = () => {
    setSignupLoginVisible(!isSignupLoginVisible);
  };

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
          <li className="px-4 hover:text-white">
            {/* MY THREADS START (icon is a bit scuffed right now) */}
            <button className="flex items-center gap-2 hover:text-white hover:stroke-white stroke-txtbright h-12">
              <svg
                width="20"
                height="20"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_209)">
                  <path
                    d="M22.1 7.8C21.0167 7.8 20.0958 7.42083 19.3375 6.6625C18.5792 5.90417 18.2 4.98333 18.2 3.9C18.2 2.81667 18.5792 1.89583 19.3375 1.1375C20.0958 0.379167 21.0167 0 22.1 0C23.1833 0 24.1042 0.379167 24.8625 1.1375C25.6208 1.89583 26 2.81667 26 3.9C26 4.98333 25.6208 5.90417 24.8625 6.6625C24.1042 7.42083 23.1833 7.8 22.1 7.8ZM14.105 26C12.935 26 11.9492 25.5992 11.1475 24.7975C10.3458 23.9958 9.945 23.0317 9.945 21.905C9.945 20.2583 10.6112 18.7687 11.9437 17.4362C13.2762 16.1038 14.9392 15.275 16.9325 14.95C16.8675 14.17 16.6725 13.5796 16.3475 13.1787C16.0225 12.7779 15.5783 12.5775 15.015 12.5775C14.365 12.5775 13.6608 12.8483 12.9025 13.39C12.1442 13.9317 11.245 14.82 10.205 16.055C8.515 18.07 7.27458 19.3808 6.48375 19.9875C5.69292 20.5942 4.8425 20.8975 3.9325 20.8975C2.8275 20.8975 1.89583 20.4858 1.1375 19.6625C0.379167 18.8392 0 17.8425 0 16.6725C0 15.5025 0.254583 14.3054 0.76375 13.0812C1.27292 11.8571 2.13417 10.3892 3.3475 8.6775C3.75917 8.11417 4.0625 7.6375 4.2575 7.2475C4.4525 6.8575 4.55 6.54333 4.55 6.305C4.55 6.15333 4.52292 6.03958 4.46875 5.96375C4.41458 5.88792 4.33333 5.85 4.225 5.85C4.11667 5.85 3.98667 5.8825 3.835 5.9475C3.68333 6.0125 3.52083 6.13167 3.3475 6.305C3.0225 6.60833 2.64875 6.77083 2.22625 6.7925C1.80375 6.81417 1.44083 6.67333 1.1375 6.37C0.8125 6.02333 0.644583 5.61708 0.63375 5.15125C0.622917 4.68542 0.790833 4.30083 1.1375 3.9975C1.6575 3.5425 2.1775 3.19583 2.6975 2.9575C3.2175 2.71917 3.72667 2.6 4.225 2.6C5.22167 2.6 6.06667 2.94667 6.76 3.64C7.45333 4.33333 7.8 5.2 7.8 6.24C7.8 6.86833 7.6375 7.56167 7.3125 8.32C6.9875 9.07833 6.44583 9.98833 5.6875 11.05C4.86417 12.22 4.25208 13.2492 3.85125 14.1375C3.45042 15.0258 3.25 15.8058 3.25 16.4775C3.25 16.8458 3.30958 17.1329 3.42875 17.3387C3.54792 17.5446 3.71583 17.6475 3.9325 17.6475C4.14917 17.6475 4.33875 17.5879 4.50125 17.4688C4.66375 17.3496 4.96167 17.0625 5.395 16.6075C5.67667 16.3042 6.0125 15.9304 6.4025 15.4862C6.7925 15.0421 7.26917 14.495 7.8325 13.845C9.1975 12.22 10.4325 11.0608 11.5375 10.3675C12.6425 9.67417 13.8017 9.3275 15.015 9.3275C16.4667 9.3275 17.6583 9.815 18.59 10.79C19.5217 11.765 20.0525 13.0975 20.1825 14.7875H21.775C22.23 14.7875 22.6146 14.9446 22.9287 15.2587C23.2429 15.5729 23.4 15.9575 23.4 16.4125C23.4 16.8675 23.2429 17.2521 22.9287 17.5662C22.6146 17.8804 22.23 18.0375 21.775 18.0375H20.1825C20.0092 20.4642 19.3754 22.3979 18.2812 23.8387C17.1871 25.2796 15.795 26 14.105 26ZM14.17 22.75C14.8633 22.75 15.4483 22.3546 15.925 21.5637C16.4017 20.7729 16.7267 19.6733 16.9 18.265C15.9033 18.5033 15.0367 18.9746 14.3 19.6787C13.5633 20.3829 13.195 21.0817 13.195 21.775C13.195 22.0783 13.2817 22.3167 13.455 22.49C13.6283 22.6633 13.8667 22.75 14.17 22.75Z"
                    fill="#CFCFCF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_209">
                    <rect width="26" height="26" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <Link to="/account">My threads</Link>
            </button>
            {/* MY THREADS END */}
          </li>
          <li className="px-4 hover:fill-white fill-txtbright">
            {/* LOGIN START */}
            <button
              onClick={toggleSignupLogin}
              className="flex items-center gap-2 hover:text-white hover:stroke-white stroke-txtbright h-12"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="current"
              >
                <path
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  d="M10 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 0 .211-.106a4 4 0 0 1 3.578 0L14 7.5m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm-2 6.303c5-3 5 3.5 9 1.767-1 4.233-6 4.233-9 1.233-3 3-8 3-9-1.233 4 1.733 4-4.767 9-1.767Z"
                />
              </svg>
            </button>
            {isSignupLoginVisible && (
              <div
                onClick={toggleSignupLogin}
                className="fixed inset-0 flex items-top justify-center bg-black bg-opacity-60 z-50"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-60 mt-[12vh]"
                >
                  <SignupLogin />
                  <button /* x-button */
                    onClick={toggleSignupLogin}
                    className="absolute top-1 right-2 text-white"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
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
