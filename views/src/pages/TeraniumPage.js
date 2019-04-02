import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import CommonWrapper from 'components/wrapper/CommonWrapper';
import TeraniumRankContainer from 'containers/teranium/TeraniumRankContainer';

class TeraniumPage extends Component {
  render() {
    return (
      <PageTemplate>
        <CommonWrapper>
          <TeraniumRankContainer/>
        </CommonWrapper>
      </PageTemplate>
    );
  }
}

export default TeraniumPage;