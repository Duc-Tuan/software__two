import { Link, NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { links } from '~/assets/dummy';
import { useStateContext } from '~/contexts';

import classNames from 'classnames/bind';
import style from './Siderbar.module.scss';
import { faBiohazard, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const ctx = classNames.bind(style);

function Sidebar() {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const isActiveLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 ';
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className={ctx('ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10')}>
      {activeMenu && (
        <>
          <div className={ctx('flex justify-between items-center')}>
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className={ctx(
                'items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900',
              )}
            >
              <FontAwesomeIcon icon={faBiohazard} /> <span>Shoppy</span>
            </Link>

            <Tippy content="Close">
              <button
                onClick={() => setActiveMenu((prev) => !prev)}
                className={ctx('text-xl rounded-full p-3 hover:bg-light-gray mt-4 block')}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            </Tippy>
          </div>

          <div className={ctx('mt-10 ')}>
            {links.map((item) => (
              <div key={item.title}>
                <p className={ctx('text-gray-400 m-3 mt-4 uppercase')}>{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) => (isActive ? isActiveLink : normalLink)}
                  >
                    {link.icon}
                    <span className={ctx('capitalize')}>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;
