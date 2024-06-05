import './NavbarMobile.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Drawer } from '@mui/joy';
import SideBarTopics from '../SideBarTopics/SideBarTopics';
import SignupLogin from '../SignupLogin/SignupLogin';
import SearchBarMobile from '../SearchBarMobile/SearchBarMobile';
import { useAuth } from '../../contexts/useAuth';

const NavbarMobile: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const createSvg = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 28 28"
      fill="current"
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
  );
  const myThreadsSvg = (
    <svg
      fill="current"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 266.135 266.135"
    >
      <g>
        <g>
          <path
            d="M192.74,69.067c-2.035-5.479-8.13-8.267-13.613-6.263c-0.243,0.09-24.958,8.93-76.52,9.209
			C57.153,72.247,22.52,60.912,21.919,60.71c-5.556-1.877-11.563,1.113-13.435,6.659c-1.872,5.551,1.108,11.571,6.654,13.442
			c1.522,0.515,37.371,12.422,85.967,12.422c0.536,0,1.077,0,1.613-0.005c55.897-0.306,82.71-10.131,83.818-10.545
			C192.004,80.625,194.77,74.543,192.74,69.067z"
          />
          <path
            d="M192.74,99.243c-2.035-5.479-8.13-8.272-13.613-6.263c-0.243,0.091-24.958,8.93-76.52,9.212
			C57.153,102.43,22.52,91.087,21.919,90.885c-5.556-1.872-11.563,1.113-13.435,6.662c-1.872,5.551,1.108,11.568,6.654,13.439
			c1.522,0.516,37.371,12.425,85.967,12.425c0.536,0,1.077,0,1.613-0.005c55.897-0.308,82.71-10.134,83.818-10.548
			C192.004,110.795,194.77,104.719,192.74,99.243z"
          />
          <path
            d="M179.126,123.15c-0.243,0.09-24.958,8.93-76.52,9.206c-45.547,0.073-80.082-11.104-80.688-11.306
			c-5.556-1.872-11.563,1.113-13.435,6.659c-1.872,5.553,1.108,11.568,6.654,13.437c1.522,0.523,37.365,12.422,85.952,12.422
			c0.541,0,1.083,0,1.628,0c55.897-0.305,82.71-10.128,83.818-10.553c5.468-2.051,8.233-8.124,6.203-13.603
			C190.705,123.935,184.61,121.146,179.126,123.15z"
          />
          <path
            d="M15.144,204.76c1.522,0.518,37.365,12.422,85.952,12.422c0.541,0,1.082,0,1.628-0.005
			c55.898-0.3,82.705-10.128,83.824-10.542c5.463-2.057,8.223-8.13,6.192-13.608c-2.029-5.474-8.119-8.254-13.607-6.266
			c-0.249,0.093-24.959,8.927-76.52,9.207c-0.5,0.005-0.987,0.005-1.481,0.005c-44.778,0-78.612-11.112-79.207-11.309
			c-5.556-1.87-11.563,1.118-13.435,6.658C6.618,196.879,9.598,202.886,15.144,204.76z"
          />
          <path
            d="M0.005,32.483c0,5.856,3.997,13.22,9.421,15.431c12.821,5.225,40.242,12.8,91.249,12.658
			c50.05,0.143,78.011-7.609,91.153-12.831c5.442-2.165,9.518-9.396,9.518-15.252V20.041c0-1.326-0.249-2.465-0.652-3.441
			c0-0.018,0.021-0.028,0.021-0.044c0-7.493-44.791-13.566-100.044-13.566C45.42,2.989,0.632,9.063,0.632,16.556
			c0,0.011,0.015,0.034,0.015,0.044C0.243,17.576,0,18.71,0,20.036v12.448H0.005z M100.675,12.056c20.247,0,36.661,3.229,36.661,7.2
			c0,3.982-16.415,7.2-36.661,7.2c-20.254,0-36.661-3.218-36.661-7.2C64.015,15.285,80.421,12.056,100.675,12.056z"
          />
          <path
            d="M201.346,235.057v-12.448c0-5.856-4.241-8.445-9.725-6.379c-14.137,5.308-43.921,13.82-90.946,14.576
			c-47.02-0.756-76.81-9.269-90.946-14.576c-5.483-2.066-9.724,0.522-9.724,6.379v12.448c0,5.856,3.997,13.22,9.421,15.426
			c12.821,5.22,40.242,12.801,91.249,12.661c50.05,0.14,78.011-7.607,91.153-12.837
			C197.276,248.143,201.346,240.913,201.346,235.057z"
          />
          <path
            d="M213.592,215.132c1.372,28.174,33.674,44.506,37.35,46.276c1.481,0.715,3.045,1.046,4.578,1.046
			c3.945,0,7.726-2.206,9.553-5.991c2.553-5.261,0.348-11.604-4.914-14.156c-6.845-3.335-24.74-14.897-25.383-28.205
			c-2.609-53.78-32.777-61.848-50.522-61.879c-0.006,0-0.011,0-0.016,0c-1.491,0-2.91,0.321-4.194,0.87
			c-0.311,0.083-0.616,0.124-0.917,0.232c-0.243,0.089-24.958,8.933-76.52,9.207c-45.547,0.472-80.082-11.106-80.688-11.304
			c-5.556-1.869-11.563,1.118-13.435,6.659c-1.872,5.551,1.108,11.567,6.654,13.432c1.522,0.519,37.365,12.428,85.952,12.428
			c0.541,0,1.083,0,1.628-0.005c51.72-0.285,78.49-8.705,83.088-10.289C193.734,173.645,211.708,176.332,213.592,215.132z"
          />
        </g>
      </g>
    </svg>
  );

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleSearch = (query: string) => {
    navigate(`/search?query=${query}`);
  };

  useEffect(() => {
    setDrawerOpen(false);
  }, [location]);

  return (
    <nav className="flex w-full items-center border-b-[1px] border-bordercol h-[4.5rem] bg-odark">
      <div className="flex w-full flex-wrap items-center">
        {/* LEFT - Logo */}
        <div className="flex ml-4">
          <Link to="" className="flex items-center">
            <img
              src="https://raw.githubusercontent.com/amilpsp/fullstack-frontend/develop/public/logo.png"
              alt="logo"
              className="max-h-10 drop-shadow-blue"
            />
          </Link>
        </div>
        {/* RIGHT - Search, Menu */}
        <div className="flex ml-auto mr-4 gap-6 items-center">
          <button aria-label="menu" onClick={toggleDrawer(true)}>
            <svg
              width="24"
              height="18"
              viewBox="0 0 28 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-4"
            >
              <path
                d="M0 18H28V15H0V18ZM0 10.5H28V7.5H0V10.5ZM0 0V3H28V0H0Z"
                fill="#CFCFCF"
              />
            </svg>
          </button>
        </div>
      </div>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          backgroundColor: '#00000000',
          color: 'red',
          paddingX: '0px',
          paddingY: '0',
          border: 'none',
        }}
      >
        <div className="bg-black h-full text-txtbright">
          <ul className="p-4">
            <li className="flex fill-txtbright border-b-[1px] border-bordercol pb-4">
              <SearchBarMobile onSearch={handleSearch} />
            </li>
            <li className="flex fill-txtbright mt-6 ml-2">
              <SignupLogin />
            </li>
            <li>
              {user && (
                <div className="gap-3 ml-3">
                  <Link to="/newThread">
                    <button className="flex items-center gap-3 stroke-txtbright h-12 hover:drop-shadow-test">
                      {createSvg}
                      <h3>Create</h3>
                    </button>
                  </Link>
                  <Link to="/account">
                    <button className="flex items-center gap-3 fill-txtbright text-txtbright h-12 hover:drop-shadow-test">
                      {myThreadsSvg}
                      <h3>My threads</h3>
                    </button>
                  </Link>
                </div>
              )}
              {!user && (
                <div className="gap-3 ml-3">
                  <button
                    disabled
                    className="flex items-center gap-3 stroke-txtdark text-txtdark h-12 hover:drop-shadow-test"
                  >
                    {createSvg}
                    <h3>Create</h3>
                  </button>
                  <button
                    disabled
                    className="flex items-center gap-3 fill-txtdark text-txtdark h-12 hover:drop-shadow-test"
                  >
                    {myThreadsSvg}
                    <h3>My threads</h3>
                  </button>
                </div>
              )}
            </li>
            <li className="mt-4">
              <SideBarTopics />
            </li>
          </ul>
        </div>
      </Drawer>
    </nav>
  );
};

export default NavbarMobile;
