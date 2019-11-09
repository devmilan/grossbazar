import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Home = lazy(() => import('./pages/Home'));
const Listing = lazy(() => import('./pages/listing/Listing'));
const Details = lazy(() => import('./pages/Details'));
const About = lazy(() => import('./pages/About'));
const Career = lazy(() => import('./pages/Career'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const NotFound = lazy(() => import('./pages/NotFound'));



const renderLoader = () => <p>Loading..</p>;


const App = () => {
  return (
    <Router>
      <Suspense fallback={renderLoader()}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/listing" component={Listing} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/about" component={About} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/terms-and-conditions" component={TermsConditions} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;