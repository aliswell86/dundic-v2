import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import CommonWrapper from 'components/wrapper/CommonWrapper';
import CharacterRecommenContainer from 'containers/loadmap/CharacterRecommenContainer';

class LoadMapPage extends Component {
  render() {
    return (
      <PageTemplate>
        <CommonWrapper>
          <CharacterRecommenContainer/>
        </CommonWrapper>
      </PageTemplate>
    );
  }
}

export default LoadMapPage;