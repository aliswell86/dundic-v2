import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}>
      <div><img src="/resource/img/openapi_logo.png" alt="네오플 api 로고"/></div>
    </div>
  );
};

export default Footer;