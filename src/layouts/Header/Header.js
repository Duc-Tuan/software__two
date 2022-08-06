import classNames from 'classnames/bind';
import style from './Header.module.scss';

const ctx = classNames.bind(style);

function Header() {
  return (
    <header>
      <div className={ctx('header')}>Header</div>
    </header>
  );
}

export default Header;
