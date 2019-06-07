import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('title')}><a href="/">던파광부닷컴</a></div>
      <div className={cx('sub-title')}>
        <div><Link to='/outline'>던파광부 개요</Link></div>
        <div><Link to='/loadmap'>광부케릭 로드맵</Link></div>
        <div><Link to='/teranium'>테라니움 순위표</Link></div>
        <div><Link to='/calc'>광부수익 계산기</Link></div>
        {/* <div>주요 부산물 가격</div>
        <div>할렘 카드 최저가</div> */}
      </div>
    </header>
  );
};

export default Header;