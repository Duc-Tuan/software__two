import { useEffect } from 'react';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faBell, faCartShopping, faCommentDots } from '@fortawesome/free-solid-svg-icons';

import classnames from 'classnames/bind';
import style from './NavBar.module.scss';

import avt from '~/assets/avatar.jpg';
import { useStateContext } from '~/contexts';
import { Cart, Chat, Notification, User } from '~/components';

const ctx = classnames.bind(style);
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tippy content={title} placement="bottom" appendTo={() => document.body}>
    <button
      onClick={customFunc}
      style={{ color }}
      className={ctx('relative text-xl rounded-full p-3 hover:bg-light-gray')}
    >
      <span style={{ background: dotColor }} className={ctx('absolute inline-flex rounded-full h-2 w-2 right-2 top-2')}>
        <FontAwesomeIcon icon={icon} />
      </span>
    </button>
  </Tippy>
);

function NavBar() {
  const { activeMenu, isClicked, screenSize, setActiveMenu, setIsClicked, handleClick, setScreenSize } =
    useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className={ctx('flex justify-between p-2 md:mx-6 relative')}>
      <NavButton title="menu" customFunc={() => setActiveMenu(!activeMenu)} color="blue" icon={faBars} />

      <div className={ctx('flex')}>
        <NavButton title="cart" customFunc={() => handleClick('cart')} color="blue" icon={faCartShopping} />

        <NavButton title="chat" customFunc={() => handleClick('Chat')} color="#03C9D7" icon={faCommentDots} />

        <NavButton title="notification" customFunc={() => handleClick('Notification')} color="#03C9D7" icon={faBell} />

        <Tippy content="profile" placement="bottom">
          <div
            className={ctx('flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg')}
            onClick={() => handleClick('UserProfile')}
          >
            <img className={ctx('rounded-full w-8 h-8 ')} src={avt} alt={avt} />
            <p>
              <span className={ctx('text-gray-400 text-14')}>Hi, </span>
              {''}
              <span className={ctx('text-gray-400 font-bold ml-1 text-14')}>Michael</span>
            </p>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </Tippy>

        {isClicked.cart && <Cart />}
        {isClicked.Chat && <Chat />}
        {isClicked.UserProfile && <User />}
        {isClicked.Notification && <Notification />}
      </div>
    </div>
  );
}

export default NavBar;
