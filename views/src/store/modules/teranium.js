import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

const GET_AUCTION_LOWPRICE = 'teranium/GET_AUCTION_LOWPRICE';

export const getAuctionLowPrice = createAction(GET_AUCTION_LOWPRICE, api.getAuctionLowPrice);

const initialState = Map({
  result: List(),
  harlemCardInfo: List()
});

export default handleActions({
  ...pender({
    type: GET_AUCTION_LOWPRICE,
    onSuccess: (state, action) => {
      const {data: items} = action.payload;
      const result = items.filter(item => item.seq >= 0 && item.seq <= 9)
      .map(item => {
        const {limit_cnt, component_cnt, price_cnt, lowprice} = item;        
        const total_price_cnt = limit_cnt * price_cnt;
        const total_gold_cnt = (limit_cnt * component_cnt) * lowprice;
        const cnt_per_gold = Math.round(total_gold_cnt / total_price_cnt);

        return {
          ...item,
          total_cnt: limit_cnt * component_cnt,
          total_price_cnt: total_price_cnt,
          total_gold_cnt: total_gold_cnt,
          cnt_per_gold: cnt_per_gold
        }
      }).sort((a, b) => { 
        return a.cnt_per_gold < b.cnt_per_gold ? 1 : a.cnt_per_gold > b.cnt_per_gold ? -1 : 0;  
      });

      const result1 = items.filter(item => item.seq >= 10 && item.seq <= 35)
      .sort((a, b) => { 
        return a.lowprice < b.lowprice ? 1 : a.lowprice > b.lowprice ? -1 : 0;  
      });
      
      return state.set('result', fromJS(result))
                  .set('harlemCardInfo', fromJS(result1));
    }
  })
}, initialState);