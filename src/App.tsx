import './index.css';
import Navbar from './Components/Navbar/Navbar';
import NavbarMobile from './Components/NavbarMobile/NavbarMobile';
import { Outlet } from 'react-router';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <div className="text-txtbright">
        <div className="lg:flex hidden">
          <Navbar />
        </div>
        <div className="lg:hidden">
          <NavbarMobile />
        </div>
        <div className="flex justify-center p-5 text-sm min-h-180 shadow-test3">
          <div className="">
            <Outlet />
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
