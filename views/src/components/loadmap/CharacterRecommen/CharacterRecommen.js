import React from 'react';
import styles from './CharacterRecommen.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CharacterRecommen = () => {
  return (
    <div className={cx('character-recommen')}>
      <div className={cx('top-img')}>
        <div className={cx('img-cover')}>
          <img src='/resource/img/loadmap_min1.jpg' alt='검귀'/>
          <div className={cx('img-title')}>
            <div className={cx('img-title01')}>DF MINE WORKER</div>
            <div className={cx('img-title-sub')}>광부케릭 완성로드맵</div>
          </div>
        </div>
      </div>
      <div className={cx('content')}>
        <div className={cx('content01')}>
          <div className={cx('title')}>1. 광부용 케릭터 추천</div>
          <div className={cx('desc')}>
            광부용 케릭터의 중요한점중 하나는 이속 돌진 스킬범위 난이도 등등이 있다.
          </div>
        </div>
        <div className={cx('content01')}>
          <div className={cx('title')}>2. 장비 스펙업 가이드</div>
          <div className={cx('desc')}>
            광부용 케릭터의 중요한점중 하나는 이속 돌진 스킬범위 난이도 등등이 있다.
          </div>
        </div>
        <div className={cx('content01')}>
          <div className={cx('title')}>3. 케릭터별 추천 사용스킬</div>
          <div className={cx('desc')}>
            광부용 케릭터의 중요한점중 하나는 이속 돌진 스킬범위 난이도 등등이 있다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterRecommen;