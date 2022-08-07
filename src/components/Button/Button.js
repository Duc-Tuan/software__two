import classnames from 'classnames/bind';
import style from './Button.module.scss';

const ctx = classnames.bind(style);

function Button() {
  return <button className={ctx('button')}>Button</button>;
}

export default Button;
