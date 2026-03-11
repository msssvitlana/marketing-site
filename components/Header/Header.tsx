// components/Header/Header.tsx

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      {/* <h2></h2> */}
      <nav>
        <ul className={css.navigation}>
          <li>Про нас</li>
          <li>Послуги</li>
          <li>Портфоліо</li>
          <li>Контакти</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
