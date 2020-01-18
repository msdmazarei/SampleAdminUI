import React from 'react';
import { Route } from 'react-router-dom';
import { LayoutMainHeader } from './header/Header';
import { LayoutMainFooter } from './footer/Footer';

import { MapDispatchToProps, connect } from 'react-redux';
import { Dispatch } from 'redux';
import { redux_state } from '../../../../redux/app_state';
import { History } from "history";

export const RouteLayoutMain = ({ component: Component, ...rest }: { [key: string]: any }) => {
    return (
        <Route {...rest} render={matchProps => (
            <LayoutMain {...matchProps}>
                <Component {...matchProps} />
            </LayoutMain>
        )} />
    )
};

interface IProps {
    history: History;
    match: any;
}

class LayoutMainComponent extends React.Component<IProps> {

    render() {
        return (
            <>
                <div className="layout-main-wrapper">
                    <LayoutMainHeader {...this.props} />
                    <main className="main mx-3">
                        <div className="row">
                            {/* <div className="col-md-4 offset-md-4"> */}
                            <div className="col-lg-4 offset-lg-4 col-md-8 offset-md-2">
                                {this.props.children}
                            </div>
                        </div>
                    </main>
                    <LayoutMainFooter {...this.props} />
                </div>
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
    }
}

export const LayoutMain = connect(state2props, dispatch2props)(LayoutMainComponent);
