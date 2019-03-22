import React from 'react';
import styles from './HarlemCard.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const CardObject = ({name, lowprice, id, rarity, trader}) => {
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
          <img src={`https://img-api.neople.co.kr/df/items/${id}`} alt={name}/>
        </div>
        <div className={cx('name')}>
          <a href={`https://dunfa.in/아이템/${name}`} target='_BLANK'><b>{name}</b></a>
        </div>
      </div>
      <div className={cx('info')}>
        <div className={cx('day-gold-red')}>
          <img className={cx('gold_img')} src='/resource/img/gold_mini.png' alt={'골드'}/>
          <NumberFormat value={lowprice} displayType={'text'} thousandSeparator={true} prefix={''}/>
        </div>
        <div className={cx('trader')}>
          <div>{trader}</div>
        </div>
      </div>
    </div>
  );
}

const HarlemCard = ({harlemCardInfo}) => {
  const list = harlemCardInfo.map(obj => {
    const {seq, name, lowprice, id, rarity, trader} = obj;

    return (
      <CardObject name={name} key={seq}
      lowprice={lowprice}
      id={id}
      rarity={rarity}
      trader={trader}/>
    );
  });

  return (
    <div className={cx('harlem-cardinfo')}>
      <div className={cx('title')}>2. 할렘지역 득템 카드정보</div>
      <div className={cx('notice')}>
        <div>* 할렘지역에서 드롭되는 카드의 실시간 경매장최저가가 보여집니다.</div>
      </div>
      <div className={cx('rank-title')}>
        <div className={cx('img')}> </div>
        <div className={cx('name')}> </div>
        <div className={cx('gold_title')}>실시간<br/>경매 최저가</div>
        <div className={cx('gold_title')}>드랍 던전</div>
      </div>
      {list}
    </div>
  );
};

export default HarlemCard;