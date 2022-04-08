import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="bg-indigo-500">
        <nav>
          <h1>Logo aqui</h1>
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? 'bg-gray-500 rounded-md' : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? 'bg-gray-500 rounded-md' : ''
                }
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="home" element={<div>Home</div>} />
          <Route path="users" element={<div>Users</div>} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
