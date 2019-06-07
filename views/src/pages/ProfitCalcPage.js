import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import CommonWrapper from 'components/wrapper/CommonWrapper';
import ProfitCalcContainer from 'containers/calc/ProfitCalcContainer';
import { Helmet } from "react-helmet";

class ProfitCalcPage extends Component {
  render() {
    return (
      <PageTemplate>
        <Helmet>
          <title>광부수익계산기 - 던파광부닷컴</title>
          <meta name="description" content="광부수익계산기. 현재 경매최저가 시세를 기반해서 케릭당 오늘 얻을 수 있는 수익을 계산합니다." />
        </Helmet>
        <CommonWrapper>
          <ProfitCalcContainer/>
        </CommonWrapper>
      </PageTemplate>
    );
  }
}

export default ProfitCalcPage;