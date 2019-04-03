import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import OutlineContainer from 'containers/outline/OutlineContainer';
import { Helmet } from "react-helmet";

class WhyPage extends Component {
  render() {
    return (
      <PageTemplate>
        <Helmet>
          <title>개요 - 던파광부닷컴</title>
          <meta name="description" content="던파광부를 하는이유. 골드가 모이는 루트. 개요소개." />
        </Helmet>
        <OutlineContainer/>
      </PageTemplate>
    );
  }
}

export default WhyPage;