import React from 'react';
import styles from './TeraniumRank.scss';
import classNames from 'classnames/bind';
import NumberFormat from 'react-number-format';

const cx = classNames.bind(styles);

// const RankObject = ({name, lowprice, cnt_per_gold, total_gold_cnt, total_price_cnt, id, rarity, total_cnt}) => {
//   const color = {
//     color: rarity === '레전더리' ? '#FF7800' : rarity === '유니크' ? '#FF00FF' : '#B36BFF'
//   }
//   const borderColor ={
//     border: rarity === '레전더리' ? '2px solid #FF7800' : rarity === '유니크' ? '2px solid #FF00FF' : '2px solid #B36BFF'
//   }
//   return (
//     <div className={cx('rank-object')}>
//       <div className={cx('img-name')} style={color}>
//         <div className={cx('img')} style={borderColor}>
//           <img src={
//             name === '골드' ? '/resource/img/gold.png' :
//             name === '할렘 레어 카드' ? '/resource/img/cardbox1.png' :
//             name === '마계 카드' ? '/resource/img/cardbox2.png' :
//             `https://img-api.neople.co.kr/df/items/${id}`
//             } alt={name}/>
//         </div>
//         <div className={cx('name')}>
//           <a href={`https://dunfa.in/아이템/${name}`} target='_blank'><b>{name}</b> {`(계정당 ${total_cnt}개)`}</a>
//         </div>
//       </div>
//       <div className={cx('info')}>
//         <div className={cx('day-gold-red')}>
//           <img className={cx('gold_img')} src='/resource/img/gold_mini.png' alt={'골드'}/>
//           <NumberFormat value={lowprice} displayType={'text'} thousandSeparator={true} prefix={''}/>
//         </div>
//         <div className={cx('day-gold')}>
//           <img className={cx('gold_img')} src='/resource/img/gold_mini.png' alt={'골드'}/>
//           <NumberFormat value={cnt_per_gold} displayType={'text'} thousandSeparator={true} prefix={''}/>
//         </div>
//         <div className={cx('day-gold')}>
//           <img className={cx('gold_img')} src='/resource/img/gold_mini.png' alt={'골드'}/>
//           <NumberFormat value={total_gold_cnt} displayType={'text'} thousandSeparator={true} prefix={''}/>
//         </div>
//         <div className={cx('day-gold')}>
//           <img className={cx('teranium_img')} src='/resource/img/teranium_mini.png' alt={'테라니움'}/>
//           <NumberFormat value={total_price_cnt} displayType={'text'} thousandSeparator={true} suffix={'개'}/>
//         </div>
//       </div>
//     </div>
//   )
// }

const TeraniumItem = ({name, lowprice, cnt_per_gold, total_gold_cnt, total_price_cnt, id, rarity, total_cnt}) => {
  const color = {
    color: rarity === '레전더리' ? '#FF7800' : rarity === '유니크' ? '#FF00FF' : '#B36BFF'
  }
  
  return (
    <div className={cx('item-card')}>
      <div className={cx('img')}>
        <img src={
          name === '골드' ? '/resource/img/gold.png' :
          name === '할렘 레어 카드' ? '/resource/img/cardbox1.png' :
          name === '마계 카드' ? '/resource/img/cardbox2.png' :
          `https://img-api.neople.co.kr/df/items/${id}`
          } alt={name}/>
      </div>
      <div className={cx('name')} style={{color}}>{name} {`(계정당 ${total_cnt}개)`}</div>
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
          <div className={cx('kind-name')}>최저가</div>
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

const TeraniumRank = ({result}) => {
  const list = result.map((obj) => {
    const {seq, name, cnt_per_gold, total_gold_cnt, total_price_cnt, lowprice, id, rarity, total_cnt} = obj;

    return (
      <TeraniumItem name={name} key={seq}
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