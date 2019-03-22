import React from 'react';
import {Link} from 'react-router-dom';
import PageTemplate from 'components/common/PageTemplate';
import CommonWrapper from 'components/wrapper/CommonWrapper';
import TeraniumRankContainer from 'containers/teranium/TeraniumRankContainer';
// import HarlemCardContainer from 'containers/teranium/HarlemCardContainer';
import styles from './page.scss';
import classNames from 'classnames/bind';

const MainPage = () => {
  const cx = classNames.bind(styles);

  return (
    <PageTemplate>
      <CommonWrapper>
        <TeraniumRankContainer/>
      </CommonWrapper>
      <CommonWrapper>
        <div className={cx('page-object')}>
          <Link to='/2'>
            <div className={cx('title')}>2. 할렘지역 득템 카드정보</div>
            <div className={cx('notice')}>
              <div>* 할렘지역에서 드롭되는 카드의 실시간 경매장최저가가 보여집니다.</div>
            </div>
          </Link>
        </div>
      </CommonWrapper>
    </PageTemplate>
  );
};

export default MainPage;