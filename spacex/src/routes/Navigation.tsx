import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import logo from '../assets/sxLogo.png';
import Capsulas from '../components/Capsulas';
import Falcon from '../components/Falcon';
import { Lanzamientos } from '../components/Lanzamientos';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout relative">
        <nav className="overflow-hidden border-r bg-black border-sky-500 hidden sm:block">
          <a href="https://www.spacex.com/">
            <img src={logo} alt="imagen" className="p-2 pl-4"></img>
          </a>
          <hr className="mx-4" />
          <ul className="mt-8">
            <li>
              <NavLink
                to="/capsulas"
                className={({ isActive }) =>
                  isActive ? 'underline rounded-md ' : ''
                }
              >
                Capsulas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/falcon"
                className={({ isActive }) =>
                  isActive ? 'underline rounded-md' : ''
                }
              >
                Falcon
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lanzamientos"
                className={({ isActive }) =>
                  isActive ? 'underline rounded-md' : ''
                }
              >
                Lanzamientos
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="capsulas" element={<Capsulas />} />
          <Route path="falcon" element={<Falcon />} />
          <Route path="lanzamientos" element={<Lanzamientos />} />
          <Route path="/*" element={<Navigate to="/capsulas" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
