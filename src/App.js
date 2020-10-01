import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import PrivacyPolicy from '../src/views/PrivacyPolicy'
import Terms from '../src/views/Terms'
import Disclaimer from '../src/views/Disclaimer'
import NotFound from '../src/views/NotFound'

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/privacy" component={PrivacyPolicy} layout={LayoutDefault} />
          <AppRoute exact path="/terms" component={Terms} layout={LayoutDefault} />
          <AppRoute exact path="/disclaimer" component={Disclaimer} layout={LayoutDefault} />
          <AppRoute path="*" component={NotFound} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;