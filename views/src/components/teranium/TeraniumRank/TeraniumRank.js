import React from 'react';
import styles from './TeraniumRank.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

const CardItem = ({name, card_name, rarity, currCardChoice}) => {
  return (
    <>
      <li style={
        {color: rarity === '레전더리' ? '#FF7800' : rarity === '유니크' ? '#FF00FF' : '#B36BFF'}
      } onClick={() => currCardChoice(name, card_name)}>{card_name}</li>
    </>
  )
}

const TeraniumItem = ({name, lowprice, cnt_per_gold, total_gold_cnt, total_price_cnt, id, rarity, total_cnt, harlemCardInfo, curr_card, card_sort_type, cardSortTypeCtrl, currCardChoice}) => {
  const color = {
    color: rarity === '레전더리' ? '#FF7800' : rarity === '유니크' ? '#FF00FF' : '#B36BFF'
  }
  const cardList = name === '할렘 레어 카드' ?
  harlemCardInfo.filter(card => card.seq >= 16 && card.seq <= 35).sort((a, b) => { 
    return card_sort_type === 'price' ? (a.lowprice < b.lowprice ? 1 : a.lowprice > b.lowprice ? -1 : 0) : 
    (a.name < b.name ? -1 : a.name > b.name ? 1 : 0);  
  }).map(card => {
    const {name: card_name, rarity} = card;

    return (
      <CardItem name={name} card_name={card_name} rarity={rarity} currCardChoice={currCardChoice} key={card_name}/>
    )
  }) : name === '마계 카드' ? harlemCardInfo.sort((a, b) => { 
    return card_sort_type === 'price' ? (a.lowprice < b.lowprice ? 1 : a.lowprice > b.lowprice ? -1 : 0) : 
    (a.name < b.name ? -1 : a.name > b.name ? 1 : 0);  
  }).map(card => {
    const {name: card_name, rarity} = card;

    return (
      <CardItem name={name} card_name={card_name} rarity={rarity} currCardChoice={currCardChoice} key={card_name}/>
    )
  }) : '';

  const cardListSortTypeName = card_sort_type === 'name' ? 'sort-select' : '';
  const cardListSortTypePrice = card_sort_type === 'price' ? 'sort-select' : '';
  
  return (
    <div className={cx('item-card')}>
      <div className={cx('head')}>
        <div className={cx('img')}>
          <img src={
            name === '골드' ? '/resource/img/gold.png' :
            name === '할렘 레어 카드' || name === '마계 카드' ?
            `https://img-api.neople.co.kr/df/items/${curr_card.id}` :
            `https://img-api.neople.co.kr/df/items/${id}`
            } alt={name}/>
        </div>
        <div className={cx('name')} style={{color}}>
          {name} {`(계정당 ${total_cnt}개)`}
          {
            name === '할렘 레어 카드' || name === '마계 카드' ? 
            <>
              <img src='/resource/img/arrow-down.svg' alt='화살표'/> <br/>
              현재 카드 : {curr_card.name.substr(0, curr_card.name.indexOf(' 카드'))}
              <div className={cx('card_selectbox')}>
                <div className={cx('card-sort')}>
                  <span className={cx(cardListSortTypeName)} onClick={() => cardSortTypeCtrl('name', name)}>이름순</span>
                  <span className={cx(cardListSortTypePrice)} onClick={() => cardSortTypeCtrl('price', name)}>가격순</span>
                </div>
                <ul>
                  {cardList}
                </ul>
              </div>
            </>
            : ''
          }
        </div>
      </div>
      <div className={cx('info')}>
        <div className={cx('desc')}>
          <div className={cx('kind-name')}>테라니움 한개당</div>
          <div className={cx('value')}>
            <NumberFormat value={cnt_per_gold} displayType={'text'} thousandSeparator={true} prefix={''} suffix={'골드'}/>
          </div>
        </div>
        <div className={cx('desc')}>
          <div className={cx('kind-name')}>오늘 얻는 골드</div>
          <div className={cx('value')}>
            <NumberFormat value={total_gold_cnt} displayType={'text'} thousandSeparator={true} prefix={''} suffix={'골드'}/>
          </div>
        </div>
        <div className={cx('desc')}>
          <div className={cx('kind-name')}>현재 경매 최저가</div>
          <div className={cx('value')}>
            <NumberFormat value={lowprice} displayType={'text'} thousandSeparator={true} prefix={''} suffix={'골드'}/>
          </div>
        </div>
        <div className={cx('desc')}>
          <div className={cx('kind-name')}>필요 테라니움 수</div>
          <div className={cx('value')}>
            <NumberFormat value={total_price_cnt} displayType={'text'} thousandSeparator={true} prefix={''} suffix={'개'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

const TeraniumRank = ({result, harlemCardInfo, cardSortTypeCtrl, currCardChoice}) => {
  const list = result.map((obj) => {
    const {seq, name, cnt_per_gold, total_gold_cnt, total_price_cnt, lowprice, id, rarity, total_cnt, curr_card, card_sort_type} = obj;

    return (
      <TeraniumItem name={name} key={seq}
      lowprice={lowprice}
      total_gold_cnt={total_gold_cnt}
      total_price_cnt={total_price_cnt}
      cnt_per_gold={cnt_per_gold}
      id={id}
      rarity={rarity}
      total_cnt={total_cnt}
      harlemCardInfo={harlemCardInfo}
      curr_card={curr_card}
      card_sort_type={card_sort_type}
      cardSortTypeCtrl={cardSortTypeCtrl}
      currCardChoice={currCardChoice}/>
    );
  });

  return (
    
    <div className={cx('container')}>
      <div className={cx('top-img')}>
        <div className={cx('img-cover')}>
          <img src='/resource/img/teranium_top_min.jpg' alt='TOP IMG'/>
          <div className={cx('img-title')}>
            <div className={cx('img-title01')}>TERANIUM VALUE RANK</div>
            <div className={cx('img-title-sub')}>테라니움 실시간 순위표</div>
          </div>
        </div>
      </div>
      <div className={cx('filter_menu')}>
        <span className={cx('filter_ic')}></span>
        <span className={cx('ft_cate')}>
          정렬
          <img src='/resource/img/arrow-down.svg' alt='화살표'/>
          <div className={cx('ft_selectbox')}>
            <ul>
              <li>순위</li>
              <li>얻는골드</li>
            </ul>
          </div>
        </span>
      </div>
      <div className={cx('section')}>
        <div className={cx('teranium-list')}>{list}</div>
      </div>
    </div>
  );
};

export default TeraniumRank;