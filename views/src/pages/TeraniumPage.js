import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import TeraniumRankContainer from 'containers/teranium/TeraniumRankContainer';

class TeraniumPage extends Component {
  render() {
    return (
      <PageTemplate>
        <TeraniumRankContainer/>
      </PageTemplate>
    );
  }
}

export default TeraniumPage;