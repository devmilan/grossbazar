import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { useDeviceDetect } from './hooks/useDeviceDetect';
import Layout from './pages/Layout';
import Loader from './components/loader/Loader';

const Home = lazy(() => import('./pages/Home'));
const Listing = lazy(() => import('./pages/listing/Listing'));
const Details = lazy(() => import('./pages/Details'));
const About = lazy(() => import('./pages/About'));
const Career = lazy(() => import('./pages/Career'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const Login = lazy(() => import('./pages/login/Login'));
const Register = lazy(() => import('./pages/register/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));
const Cart = lazy(() => import('./pages/cart/Cart'));
const Admin = lazy(() => import('./admin'));

const renderLoader = () => <Loader />;

const App = () => {
  const location = useLocation();
  const { isMobile } = useDeviceDetect();

  console.log('isMobile======>', isMobile)
  return (
    <Layout>
      <Suspense fallback={renderLoader()}>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route exact path="/listing/:categoryid" render={({ match }) => <Listing match={match} key={match.params.categoryid} />} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/about" component={About} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/terms-and-conditions" component={TermsConditions} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;