import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Головна</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Каталог</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Улюблені</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
