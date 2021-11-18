
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';

import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams, useLocation, Redirect } from "react-router-dom";


const DemoRouter = () => {
    return (
        <div className="container">
            <Router>
                <Header/>
                
                <Switch>
                    
                <Route exact path="/" component={Welcome} />
                    <Route path="/home" component={Home} />
                    <Route path="/person" component={Person} />
                    <Route path="/about" component={About}/>

                    {/* <Route component={NotFound} />   */}
                                 


                </Switch>
            </Router>
        </div>
    );
};


const Header = () => {
    return (
        <Fragment>
            <ul className="nav nav-pills nav-fill bg-dark text-white">

                <li className="nav-item">"BUGG"</li>

               
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link" to="/person">Person</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/about">About us</Link>
                </li>
               
            </ul>
        </Fragment>
    );
};

/* const Home = () => {
    // useHistory allows developer access to the React Routers history object
    const history = useHistory();

    return (
        <Fragment>
            Home Page
            <br/>
            <a href="#" className="btn btn-outline-danger" onClick={() => history.goBack()} >Back</a>
            <a href="#" className="btn btn-outline-primary" onClick={() => history.push('/home')} >back home</a>
        </Fragment>
    );
}; */


const Home = () => {
    return (
        <Fragment>
            Home Page
        </Fragment>
    );
};

const Welcome = () => {
    return (
        <Fragment>
            Welcome Page
        </Fragment>
    );
};

const Person = () => {
    return (
        <Fragment>
            Person Page
        </Fragment>
    );
};

const About = () => {
    return (
        <Fragment>
            About Us Page
        </Fragment>
    );
};


export default DemoRouter;
