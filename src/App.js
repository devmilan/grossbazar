import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import Layout from './pages/Layout';
import Cart from './pages/cart/Cart';
import Loader from './components/loader/Loader';
import useAddToHomescreenPrompt from "./hooks/useAddToHomescreenPrompt";

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
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);

  const hide = () => setVisibleState(false);

  React.useEffect(
    () => {
      if (prompt) {
        setVisibleState(true);
      }
    },
    [prompt]
  );

  return (
    <Layout>
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props}>
          <Suspense fallback={renderLoader()}>
            <Switch location={location}>
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
              <Route path="/admin" component={Admin} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </animated.div>
      ))}
      <button onClick={promptToInstall}>Add to homescreen</button>
    </Layout>
  );
}

export default App;