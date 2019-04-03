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
            광부용 케릭터의 중요한점중 하나는 이속 돌진 스킬범위 컨트롤편함 등이 있습니다. 추천할수 있는 직업은 검귀, 여넨마, 팔라딘, 스위프트마스터 등이 있습니다.
          </div>
        </div>
        <div className={cx('content01')}>
          <div className={cx('title')}>2. 장비 스펙업 가이드</div>
          <div className={cx('desc')}>
            보통 방어구는 할렘에픽 질주셋. 장신구는 할전더리. 무기는 테이쩔로 얻을 수 있는 천공무기까지의 최소스펙을 추천합니다.
          </div>
        </div>
        <div className={cx('content01')}>
          <div className={cx('title')}>3. 케릭터별 추천 사용스킬</div>
          <div className={cx('desc')}>
            유튜브를 검색하여 각각의 방에 맞는 스킬을 숙지합니다. 무색큐브조각이 많이들어가는 1각,2각의 스킬은 최소화합니다. 그러나 각성기를 안써서 시간이 더 소모 된다면 쓰는것을 추천합니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterRecommen;