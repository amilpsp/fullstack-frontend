import './index.css';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <div className="text-txtbright">
        <Navbar />
        <div className="flex justify-center p-5 text-sm min-h-180 shadow-test3">
          <div className="max-w-[50vw]">
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
