import './index.css';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <div className="bg-bgcol text-txtbright">
        <Navbar />
        <div className="flex justify-center p-5 text-sm min-h-180">
          <div className="max-w-[1080px]">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
