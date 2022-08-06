import classNames from 'classnames/bind';
import style from './Footer.module.scss';

const ctx = classNames.bind(style);

function Footer() {
  return (
    <footer>
      <div className={ctx('footer')}>Footer</div>
    </footer>
  );
}

export default Footer;
