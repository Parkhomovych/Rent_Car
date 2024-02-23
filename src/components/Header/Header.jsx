import * as HeaderStyle from './Header.styled.js';
export const Header = () => {
  return (
    <HeaderStyle.Header>
      <nav>
        <HeaderStyle.List>
          <li>
            <HeaderStyle.MyLink to="/">Головна</HeaderStyle.MyLink>
          </li>
          <li>
            <HeaderStyle.MyLink to="/catalog">Каталог</HeaderStyle.MyLink>
          </li>
          <li>
            <HeaderStyle.MyLink to="/favorites">Улюблені</HeaderStyle.MyLink>
          </li>
        </HeaderStyle.List>
      </nav>
    </HeaderStyle.Header>
  );
};
