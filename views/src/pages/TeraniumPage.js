import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import CommonWrapper from 'components/wrapper/CommonWrapper';
import TeraniumRankContainer from 'containers/teranium/TeraniumRankContainer';
import { Helmet } from "react-helmet";

class TeraniumPage extends Component {
  render() {
    return (
      <PageTemplate>
        <Helmet>
          <title>실시간테라니움순위표 - 던파광부닷컴</title>
          <meta name="description" content="실시간 경매장 가격에 의한 실시간 테라니움 순위표." />
        </Helmet>
        <CommonWrapper>
          <TeraniumRankContainer/>
        </CommonWrapper>
      </PageTemplate>
    );
  }
}

export default TeraniumPage;