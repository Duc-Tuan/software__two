import classNames from 'classnames/bind';
import style from './Header.module.scss';

const ctx = classNames.bind(style);

function Header({ category, title }) {
  return (
    <header className={ctx('mb-10')}>
      <p className={ctx('text-gray-400')}>{category}</p>

      <p className={ctx('text-3xl font-extrabold tracking-tight text-slate-900')}>{title}</p>
    </header>
  );
}

export default Header;
