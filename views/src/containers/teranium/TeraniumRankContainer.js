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
  render() {
    const {result} = this.props;
    return (
      <TeraniumRank result={result}/>
    );
  }
}

export default connect(
  (state) => ({
    result: state.teranium.toJS().result
  }),
  (dispatch) => ({
    TeraniumActions: bindActionCreators(teraniumActions, dispatch)
  })
)(TeraniumRankContainer);