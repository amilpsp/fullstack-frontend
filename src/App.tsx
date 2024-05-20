import './index.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer/Footer'

function App() {
    return (
        <>
            <div className="bg-bgcol text-txtbright">
                <Navbar />
                <div className="p-5 text-sm">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App
