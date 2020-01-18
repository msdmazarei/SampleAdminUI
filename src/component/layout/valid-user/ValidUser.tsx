import React from 'react';
import { MapDispatchToProps, connect } from 'react-redux';
import { Dispatch } from 'redux';
import { redux_state } from '../../../redux/app_state';
import { IUser } from '../../../model/model.user';
import { History } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { Dashboard } from '../../dashboard/Dashboard';
import { Profile } from '../../profile/Profile';
import { LayoutMainNotFound } from './main/not-found/NotFound';
import { RouteLayoutMain } from './main/Main';

const appValidUserRoutes = (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={() => <Redirect to="/dashboard" />} />
            <RouteLayoutMain exact path="/dashboard" component={Dashboard} />
            <RouteLayoutMain path="/profile" component={Profile} />
            
            {/* keep "cmp LayoutMainNotFound" last */}
            <RouteLayoutMain component={LayoutMainNotFound} />
        </Switch>
    </HashRouter>
);

export const RouteLayoutValidUser = ({ ...rest }: { [key: string]: any }) => {
    return (
        <Route {...rest} render={matchProps => (
            <LayoutValidUser {...matchProps} />
        )} />
    )
};

interface IProps {
    logged_in_user: IUser | null;
    history: History;
    match: any;
}

class LayoutValidUserComponent extends React.Component<IProps> {

    componentWillMount() {
        // debugger;
        if (!this.props.logged_in_user) {
            this.props.history.push("/login");

        } else {

        }
    }

    componentWillUnmount() {
    }

    shouldComponentUpdate() {
        // debugger;
        if (!this.props.logged_in_user) {
            this.props.history.push("/login");
            return false;
        }
        return true;
    }

    render() {
        if (!this.props.logged_in_user) {
            return (
                <div></div>
            );
        }
        return (
            <>
                <Router>{appValidUserRoutes}</Router>
            </>
        )
    }
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
    return {
    }
}

const state2props = (state: redux_state) => {
    return {
        logged_in_user: state.logged_in_user,
    }
}

export const LayoutValidUser = connect(state2props, dispatch2props)(LayoutValidUserComponent);
