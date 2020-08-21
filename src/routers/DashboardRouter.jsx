import React from 'react';
import { NavBar } from '../components/ui/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';

export const DashboardRouter = () => {
    return (
        <>
            <NavBar />

            <div>
                <Switch >
                    <Route exact path= '/marvel' component= { MarvelScreen } />
                    <Route exact path= '/hero/:heroId' component= { HeroScreen } />
                    <Route exact path= '/dc' component= { DcScreen } />

                    <Redirect to= '/marvel' />
                </Switch>
            </div>

        </>
    )
}
