import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ProfitCalcContainer from 'containers/calc/ProfitCalcContainer';

const MainPage = () => {
  return (
    <PageTemplate>
      <ProfitCalcContainer/>
    </PageTemplate>
  );
};

export default MainPage;