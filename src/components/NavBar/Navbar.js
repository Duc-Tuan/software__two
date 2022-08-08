// import { useEffect } from 'react';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classnames from 'classnames/bind';
import style from './NavBar.module.scss';

// import avt from '~/assets/avatar.jpg';
import { useStateContext } from '~/contexts';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ctx = classnames.bind(style);
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tippy content={title} placement="bottom" appendTo={() => document.body}>
    <button
      onClick={customFunc}
      style={{ color }}
      className={ctx('relative text-xl rounded-full p-3 hover:bg-light-gray')}
    >
      <span className={ctx('absolute inline-flex rounded-full h-2 w-2 right-2 top-2')}>
        <FontAwesomeIcon icon={faBars} />
      </span>
    </button>
  </Tippy>
);

function NavBar() {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className={ctx('flex justify-between p-2 md:mx-6 relative')}>
      <NavButton title="menu" customFunc={() => setActiveMenu(!activeMenu)} color="blue" icon={faBars} />

      {/* <NavButton title="cart" customFunc={() => handleClick('cart')} color="blue" icon={faShoppingCart} /> */}
    </div>
  );
}

export default NavBar;
