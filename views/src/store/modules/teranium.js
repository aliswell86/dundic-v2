import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_AUCTION_LOWPRICE = 'teranium/GET_AUCTION_LOWPRICE';
const SET_CARD_SORT_TYPE = 'teranium/SET_CARD_SORT_TYPE';
const SET_CURR_CARD = 'teranium/SET_CURR_CARD';

export const getAuctionLowPrice = createAction(GET_AUCTION_LOWPRICE, api.getAuctionLowPrice);
export const setCardSortType = createAction(SET_CARD_SORT_TYPE);
export const setCurrCard = createAction(SET_CURR_CARD);

const initialState = Map({
  result: List(),
  harlemCardInfo: List()
});

export default handleActions({
  ...pender({
    type: GET_AUCTION_LOWPRICE,
    onSuccess: (state, action) => {
      const {data: items} = action.payload;

      const result1 = items.filter(item => item.seq >= 10 && item.seq <= 35)
      .sort((a, b) => { 
        return a.lowprice < b.lowprice ? 1 : a.lowprice > b.lowprice ? -1 : 0;  
      });

      const result = items.filter(item => item.seq >= 0 && item.seq <= 9)
      .map(item => {
        const {limit_cnt, component_cnt, price_cnt, name} = item;
        const cardInfoConfig = name === '할렘 레어 카드' || name === '마계 카드' ?
        result1.reduce((previous, current) => {
          return previous.lowprice > current.lowprice ? current : previous;
        }) : item;
        
        const total_price_cnt = limit_cnt * price_cnt;
        const total_gold_cnt = (limit_cnt * component_cnt) * (cardInfoConfig.lowprice);
        const cnt_per_gold = Math.round(total_gold_cnt / total_price_cnt);

        return {
          ...item,
          curr_card: cardInfoConfig,
          lowprice: cardInfoConfig.lowprice,
          total_cnt: limit_cnt * component_cnt,
          total_price_cnt: total_price_cnt,
          total_gold_cnt: total_gold_cnt,
          cnt_per_gold: cnt_per_gold,
          card_sort_type: 'name'
        }
      }).sort((a, b) => { 
        return a.cnt_per_gold < b.cnt_per_gold ? 1 : a.cnt_per_gold > b.cnt_per_gold ? -1 : 0;  
      });

      return state.set('result', fromJS(result))
                  .set('harlemCardInfo', fromJS(result1));
    }
  }),
  [SET_CARD_SORT_TYPE]: (state, action) => {
    const {type, name} = action.payload;
    const findIndex = state.get('result').toJS().findIndex(item => item.name === name);
    
    return state.setIn(['result', findIndex, 'card_sort_type'], type);
  },
  [SET_CURR_CARD]: (state, action) => {
    const {name, card_name} = action.payload;
    const harlemCardInfo = state.get('harlemCardInfo').toJS();
    const result = state.get('result').toJS();
    const findCardInfo = harlemCardInfo.find(card => card.name === card_name);
    const findIndex = state.get('result').toJS().findIndex(item => item.name === name);

    const reResult = result.map((item, index) => {
      const {limit_cnt, component_cnt, price_cnt, lowprice, curr_card} = item;
      const total_price_cnt = limit_cnt * price_cnt;
      const lowpriceConfig = findIndex === index ? findCardInfo.lowprice : lowprice;
      const total_gold_cnt = (limit_cnt * component_cnt) * (lowpriceConfig);
      const cnt_per_gold = Math.round(total_gold_cnt / total_price_cnt);

      return {
        ...item,
        curr_card: findIndex === index ? findCardInfo : curr_card,
        lowprice: lowpriceConfig,
        total_price_cnt: total_price_cnt,
        total_gold_cnt: total_gold_cnt,
        cnt_per_gold: cnt_per_gold
      }
    }).sort((a, b) => { 
      return a.cnt_per_gold < b.cnt_per_gold ? 1 : a.cnt_per_gold > b.cnt_per_gold ? -1 : 0;  
    });
    
    return state.set('result', fromJS(reResult));
  }
}, initialState);