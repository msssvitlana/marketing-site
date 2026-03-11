// components/Header/Header.tsx

import css from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={css.header}>
      <Link href='/' aria-label='Home'>
        LOgo
      </Link>
      <nav aria-label='Main Navigation'>
        <ul className={css.navigation}>
          <li>
            <Link href='/about'>Про нас</Link>
          </li>
          <li>
            <Link href='/services'>Послуги</Link>
          </li>
          <li>
            <Link href='/portfolio'>Портфоліо</Link>
          </li>
          <li>
            <Link href='/contacts'>Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
