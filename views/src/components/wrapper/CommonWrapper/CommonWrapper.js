import React from 'react';
import styles from './CommonWrapper.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CommonWrapper = ({children}) => (
  
  <div className={cx('common-wrapper')}>
    {children}
  </div>
);

export default CommonWrapper;
