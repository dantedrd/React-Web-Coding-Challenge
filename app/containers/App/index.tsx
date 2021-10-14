/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import styled from 'styles/styled-components';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import PrincipalPage from 'containers/PrincipalStolenBikes/Loadable';
import Header from 'components/Header';


const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={PrincipalPage} />
      </Switch>
    </AppWrapper>
  );
}
export default hot(App);
