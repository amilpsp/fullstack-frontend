import { Link } from 'react-router-dom'
import './Navbar.css'

/* type Props = {} */

const Navbar = (/* props: Props */) => {
    return (
        <div className="flex p-5 mb-2 text-txtdark border-b-[1px] border-bordercol">
            <p className="mr-10">Navbar</p>
            <ul className="flex space-x-6 text-white text-xs">
                <li>
                    <Link to="">HomePage</Link>
                </li>
                <li>
                    <Link to="/account">AccountPage</Link>
                </li>
                <li>
                    <Link to="/search">SearchPage</Link>
                </li>
                <li>
                    <Link to="/thread">ThreadPage</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
