import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import { NavBar } from '../components/ui/NavBar';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route path="/" component={ LoginScreen } />    
                </Switch>
            </div>
        </Router>
    )
}
