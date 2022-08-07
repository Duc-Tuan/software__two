import classNames from 'classnames/bind';
import style from './Siderbar.module.scss';

const ctx = classNames.bind(style);

function Sidebar() {
  return (
    <section>
      <div className={ctx('Sidebar')}>Sidebar</div>
    </section>
  );
}

export default Sidebar;
