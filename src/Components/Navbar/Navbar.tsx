import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';

const Navbar: React.FC = () => {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-bgcol border-b-[1px] border-bordercol h-24">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* LEFT - Logo */}
        <div className="flex ml-16">
          <Link to="" className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0">
            <img src="templogo.png" alt="logo" className="max-h-12 me-2" />
          </Link>
        </div>
        {/* MIDDLE - Search Bar*/}
        <div className="mx-auto flex-row ps-0 md:flex">
          <SearchBar />
        </div>

        {/* RIGHT - Create, My Threads, Login */}
        <ul className="flex flex-row mr-16">
          <li className="px-2">
            <Link to="/">Create</Link>
          </li>
          <li className="px-2">
            <Link to="/account">My threads</Link>
          </li>
          <li className="px-2">Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
