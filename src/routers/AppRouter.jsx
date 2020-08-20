import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import { NavBar } from '../components/ui/NavBar';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroesApp } from '../HeroesApp';



export const AppRouter = () => {
    return (

        <Router>
            <div>
                <NavBar />

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/" component={ HeroesApp } />
                        
                </Switch>
            </div>
        </Router>
    )
}
