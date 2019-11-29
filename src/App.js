import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './pages/Layout';
import Cart from './pages/cart/Cart';
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



const renderLoader = () => <p>Loading..</p>;

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={renderLoader()}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/listing/:categoryid" component={Listing} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/about" component={About} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/terms-and-conditions" component={TermsConditions} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/admin" component={Admin} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;