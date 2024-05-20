import { Link } from 'react-router-dom'
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar'

const Navbar: React.FC = () => {
    return (
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-bgcol border-b-[1px] border-bordercol h-24">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                {/* LEFT - Logo */}
                <div className="flex">
                    <Link
                        to=""
                        className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0"
                    >
                        <img
                            src="templogo.png"
                            alt="logo"
                            className="max-h-12 me-2"
                        />
                    </Link>
                </div>
                {/* MIDDLE - Search Bar*/}
                <div className="mx-auto hidden flex-row ps-0 md:flex">
                    <SearchBar />
                </div>

                {/* RIGHT - Create, My Threads, Login */}
                <ul className="list-style-none flex flex-row ps-0 md:ps-4">
                    <li className="px-2">icon 1</li>
                    <li className="px-2">icon 2</li>
                    <li className="px-2">icon 3</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
