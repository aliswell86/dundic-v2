import React from 'react';
import styles from './TeraniumRank.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const RankObject = ({name, lowprice, cnt_per_gold, total_gold_cnt, total_price_cnt, id, rarity, total_cnt}) => {
  const color = {
    color: rarity === '레전더리' ? '#FF7800' : rarity === '유니크' ? '#FF00FF' : '#B36BFF'
  }
  const borderColor ={
    border: rarity === '레전더리' ? '2px solid #FF7800' : rarity === '유니크' ? '2px solid #FF00FF' : '2px solid #B36BFF'
  }
  return (
    <div className={cx('rank-object')}>
      <div className={cx('img-name')} style={color}>
        <div className={cx('img')} style={borderColor}>
          <img src={
            name === '골드' ? '/resource/img/gold.png' :
            name === '할렘 레어 카드' ? '/resource/img/cardbox1.png' :
            name === '마계 카드' ? '/resource/img/cardbox2.png' :
            `https://img-api.neople.co.kr/df/items/${id}`
            } alt={name}/>
        </div>
        <div className={cx('name')}>
          <a href={`https://dunfa.in/아이템/${name}`} target='_blank'><b>{name}</b> {`(계정당 ${total_cnt}개)`}</a>
        </div>
      </div>
      <div className={cx('info')}>
        <div className={cx('day-gold-red')}>
          <img className={cx('gold_img')} src='/resource/img/gold_mini.png' alt={'골드'}/>
          <NumberFormat value={lowprice} displayType={'text'} thousandSeparator={true} prefix={''}/>
        </div>
        <div className={cx('day-gold')}>
          <img className={cx('gold_img')} src='/resource/img/gold_mini.png' alt={'골드'}/>
          <NumberFormat value={cnt_per_gold} displayType={'text'} thousandSeparator={true} prefix={''}/>
        </div>
        <div className={cx('day-gold')}>
          <img className={cx('gold_img')} src='/resource/img/gold_mini.png' alt={'골드'}/>
          <NumberFormat value={total_gold_cnt} displayType={'text'} thousandSeparator={true} prefix={''}/>
        </div>
        <div className={cx('day-gold')}>
          <img className={cx('teranium_img')} src='/resource/img/teranium_mini.png' alt={'테라니움'}/>
          <NumberFormat value={total_price_cnt} displayType={'text'} thousandSeparator={true} suffix={'개'}/>
        </div>
      </div>
    </div>
  )
}

const TeraniumRank = ({result}) => {
  const list = result.map(obj => {
    const {seq, name, cnt_per_gold, total_gold_cnt, total_price_cnt, lowprice, id, rarity, total_cnt} = obj;

    return (
      <RankObject name={name} key={seq}
      lowprice={lowprice}
      total_gold_cnt={total_gold_cnt}
      total_price_cnt={total_price_cnt}
      cnt_per_gold={cnt_per_gold}
      id={id}
      rarity={rarity}
      total_cnt={total_cnt}/>
    );
  });

  return (
    
    <div className={cx('container')}>
      <div className={cx('title')}>1. 테라니움 한개당 가치순위표 (경매장 최저가 기준)</div>
      <div className={cx('notice')}>
        <div>* 경매 최저가 * 살수있는 개수 / 테라니움 수 = 테라니움 한개당 골드</div>
        <div>* 할렘레어카드는 20만, 마계카드는 30만골드로 설정한 가격입니다.</div>
      </div>
      <div className={cx('rank-title')}>
        <div className={cx('img')}> </div>
        <div className={cx('name')}> </div>
        <div className={cx('gold_title')}>실시간<br/>경매 최저가</div>
        <div className={cx('gold_title')}>테라니움<br/>한개당 골드</div>
        <div className={cx('gold_title')}>계정당 얻는<br/>총 골드</div>
        <div className={cx('gold_title')}>총 필요한<br/>테라니움 수</div>
      </div>
      {list}
    </div>
  );
};

export default TeraniumRank;