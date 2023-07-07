import { NavLink, Outlet } from 'react-router-dom';
import './Layout.scss';
import { Suspense } from 'react';
import { Loader } from 'components';
import { SiAtom } from 'react-icons/si';

export const Layout = () => (
  <>
    <header>
      <SiAtom size={48} />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Suspense
        fallback={
          <div className="backdrop-for-loader">
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </main>
  </>
);
