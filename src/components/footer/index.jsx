import React from 'react';
import classNames from 'classnames/bind';
import styles from './footer.css';

const cx = classNames.bind(styles);

const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  return (
    <footer className={ cx('component') }>
      <div className='container'>
        <p>Report generated by&nbsp;
          <a href='http://adamgruber.github.io/mochawesome/' target='_blank'>mochawesome</a>.
          <br />Designed and built by <a href='https://github.com/adamgruber' target='_blank'>adamgruber</a>. &copy;{ copyrightYear }.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
