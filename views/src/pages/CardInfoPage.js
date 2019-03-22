import React from 'react';
import {Link} from 'react-router-dom';
import PageTemplate from 'components/common/PageTemplate';
import CommonWrapper from 'components/wrapper/CommonWrapper';
// import TeraniumRankContainer from 'containers/teranium/TeraniumRankContainer';
import HarlemCardContainer from 'containers/teranium/HarlemCardContainer';
import styles from './page.scss';
import classNames from 'classnames/bind';

const CardInfoPage = () => {
  const cx = classNames.bind(styles);

  return (
    <PageTemplate>
      <CommonWrapper>
        <div className={cx('page-object')}>
          <Link to='/1' className={cx('page-object')}>
            <div className={cx('title')}>1. 테라니움 한개당 가치순위표 (경매장 최저가 기준)</div>
            <div className={cx('notice')}>
              <div>* 경매 최저가 * 살수있는 개수 / 테라니움 수 = 테라니움 한개당 골드</div>
              <div>* 할렘레어카드는 20만, 마계카드는 30만골드로 설정한 가격입니다.</div>
            </div>
          </Link>
        </div>
      </CommonWrapper>
      <CommonWrapper>
        <HarlemCardContainer/>
      </CommonWrapper>
    </PageTemplate>
  );
};

export default CardInfoPage;