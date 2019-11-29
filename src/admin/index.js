import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from "react-router-dom";
import css from './index.module.scss';
import Loader from '../components/loader/Loader';
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Products = lazy(() => import('./pages/Products'));
const Users = lazy(() => import('./pages/Users'));


const renderLoader = () => <Loader/>;

const Admin = () => {
    let { path, url } = useRouteMatch();

    return (
        <Router>
            <div className={css.mk_admin}>
                <header>

                </header>
                <div className={css.admin_container}>
                    <div className={css.left}>
                        <ul>
                            <li>
                                <Link to={`${url}`}>Dashboard</Link>
                            </li>
                            <li>
                                <Link to={`${url}/products`}>Products</Link>
                            </li>
                            <li>
                                <Link to={`${url}/users`}>Users</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={css.right}>
                        <Suspense fallback={renderLoader()}>
                            <Switch>
                                <Route exact path={`${path}/`} component={Dashboard} />
                                <Route exact path={`${path}/products`} component={Products} />
                                <Route exact path={`${path}/users`} component={Users} />
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </div>

        </Router>

    )
}
export default Admin;