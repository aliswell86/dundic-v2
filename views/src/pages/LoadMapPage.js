import React, { Component } from 'react';
import PageTemplate from 'components/common/PageTemplate';
import CharacterRecommenContainer from 'containers/loadmap/CharacterRecommenContainer';

class LoadMapPage extends Component {
  render() {
    return (
      <PageTemplate>
        <CharacterRecommenContainer/>
      </PageTemplate>
    );
  }
}

export default LoadMapPage;