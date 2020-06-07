import React, { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from './pages/Layout';
import Cart from './pages/cart/Cart';
import Loader from './components/loader/Loader';
import Checkout from './pages/checkout/Checkout';

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
const Admin = lazy(() => import('./admin'));
const NotFound = lazy(() => import('./pages/NotFound'));

const renderLoader = () => <Loader />;

const App = () => {
  ;
  return (
    <Layout>
      <Suspense fallback={renderLoader()}>
        <Switch>
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