import React from 'react';
import styles from './Outline.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Outline = () => {
  return (
    <div className={cx('outline')}>
      <div className={cx('chapter01')}>
        <div className={cx('title')}>We DF Mine Worker</div>
        <div className={cx('copy')}>" 던 파 광 부 가 뭔 가 요 ? "</div>
        <div className={cx('copy-desc')}>
          던전앤파이터에서 할 수 있는 노가다종류는 많습니다. <br/>
          그 중 최고의 노가다 던전은 토탈이클립스입니다. <br/>
          이유는 다른 던전에 비해 골드보상이 높습니다. <br/>
          게임하면서 용돈벌이를 하고 싶으시다면 던파광부를 시작해보세요.
        </div>        
      </div>
      <div className={cx('chapter02')}></div>
      <div className={cx('chapter03')}>
        <div className={cx('title')}>던파광부 수익구조</div>
        <div calssName={cx('deco-bar')}></div>
      </div>
    </div>
  );
};

export default Outline;