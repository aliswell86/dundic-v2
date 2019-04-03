import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import CommonWrapper from 'components/wrapper/CommonWrapper';
import CharacterRecommenContainer from 'containers/loadmap/CharacterRecommenContainer';
import { Helmet } from "react-helmet";

class LoadMapPage extends Component {
  render() {
    return (
      <PageTemplate>
        <Helmet>
          <title>스펙업로드맵 - 던파광부닷컴</title>
          <meta name="description" content="광부추천 케릭터. 광부가 되기위한 스펙정보. 케릭터별 토탈이클립스 스킬빌드" />
        </Helmet>
        <CommonWrapper>
          <CharacterRecommenContainer/>
        </CommonWrapper>
      </PageTemplate>
    );
  }
}

export default LoadMapPage;