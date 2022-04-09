import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import logo from '../assets/sxLogo.png';
import Capsulas from '../components/Capsulas';
import Falcon from '../components/Dragons';
import { Lanzamientos } from '../components/Rockets';

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
                to="/dragons"
                className={({ isActive }) =>
                  isActive ? 'underline rounded-md' : ''
                }
              >
                Dragons
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rockets"
                className={({ isActive }) =>
                  isActive ? 'underline rounded-md' : ''
                }
              >
                Rockets
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="capsulas" element={<Capsulas />} />
          <Route path="dragons" element={<Falcon />} />
          <Route path="rockets" element={<Lanzamientos />} />
          <Route path="/*" element={<Navigate to="/capsulas" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
