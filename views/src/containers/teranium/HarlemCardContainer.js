import React, { Component } from 'react';
import HarlemCard from 'components/teranium/HarlemCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as teraniumActions from 'store/modules/teranium';

class HarlemCardContainer extends Component {

  componentDidMount() {
    const {TeraniumActions, harlemCardInfo} = this.props;
    if(harlemCardInfo.length === 0) {
      TeraniumActions.getAuctionLowPrice();
    }
  }

  render() {
    const {harlemCardInfo} = this.props;

    return (
      <HarlemCard harlemCardInfo={harlemCardInfo}/>
    );
  }
}

export default connect(
  (state) => ({
    harlemCardInfo: state.teranium.toJS().harlemCardInfo
  }),
  (dispatch) => ({
    TeraniumActions: bindActionCreators(teraniumActions, dispatch)
  })
)(HarlemCardContainer);
