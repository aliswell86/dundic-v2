import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('title')}><a href="/">던파광부 노가다정보</a></div>
      <div className={cx('sub-title')}>
        <div><Link to='/outline'>던파광부 개요</Link></div>
        <div>광부스펙 로드맵</div>
        <div>테라니움 순위표</div>
        <div>주요 부산물 가격</div>
        <div>할렘 카드 최저가</div>
      </div>
    </header>
  );
};

export default Header;