// import classnames from 'classnames/bind';
// import style from './Button.module.scss';

// const ctx = classnames.bind(style);

function Button({ color, bgcolor, text, borderRadius, size }) {
  return (
    <button
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      type="button"
      style={{ background: bgcolor, color, borderRadius }}
    >
      {text}
    </button>
  );
}

export default Button;
