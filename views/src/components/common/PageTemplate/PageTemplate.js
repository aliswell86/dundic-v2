import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
  <div className={cx('page-template')}>
    <Header/>
    <div className={cx('main')}>
      {children}
    </div>
    <Footer/>
  </div>
);

export default PageTemplate;