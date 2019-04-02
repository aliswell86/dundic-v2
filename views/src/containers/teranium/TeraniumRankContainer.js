import React, { Component } from 'react';
import TeraniumRank from 'components/teranium/TeraniumRank';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as teraniumActions from 'store/modules/teranium';

class TeraniumRankContainer extends Component {

  componentDidMount() {
    const {TeraniumActions, result} = this.props;
    if(result.length === 0) {
      TeraniumActions.getAuctionLowPrice();
    }
  }

  cardSortTypeCtrl = (type, name) => {
    const {TeraniumActions, result} = this.props;
    const filterSortType = result.find(item => item.name === name).card_sort_type;

    if(filterSortType!== type) {
      TeraniumActions.setCardSortType({type, name});
    }
  }

  currCardChoice = (name, card_name) => {
    const {TeraniumActions, result} = this.props;
    TeraniumActions.setCurrCard({name, card_name});
  }

  render() {
    const {cardSortTypeCtrl, currCardChoice} = this;
    const {result, harlemCardInfo} = this.props;
    return (
      <TeraniumRank 
      result={result} harlemCardInfo={harlemCardInfo}
      cardSortTypeCtrl={cardSortTypeCtrl}
      currCardChoice={currCardChoice}/>
    );
  }
}

export default connect(
  (state) => ({
    result: state.teranium.toJS().result,
    harlemCardInfo: state.teranium.toJS().harlemCardInfo
  }),
  (dispatch) => ({
    TeraniumActions: bindActionCreators(teraniumActions, dispatch)
  })
)(TeraniumRankContainer);