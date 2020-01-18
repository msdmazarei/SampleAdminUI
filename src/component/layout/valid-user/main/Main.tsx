import React from 'react';
import { Route } from 'react-router-dom';
import { LayoutMainHeader } from './header/Header';

import { MapDispatchToProps, connect } from 'react-redux';
import { Dispatch } from 'redux';
import { redux_state } from '../../../../redux/app_state';
import { History } from "history";
import { LayoutMainSidebar } from './sidebar/Sidebar';

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
                <div className="loading-container loading-inactive">
                    <div className="loader"></div>
                </div>

                <LayoutMainHeader {...this.props} />

                <div className="main-container container-fluid">
                    <div className="page-container">
                        
                        <LayoutMainSidebar {...this.props} />

                        <div className="page-content">

                            <div className="page-breadcrumbs">
                                <ul className="breadcrumb">
                                    <li>
                                        <i className="fa fa-home"></i>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">More Pages</a>
                                    </li>
                                    <li className="active">Blank Page</li>
                                </ul>
                            </div>


                            <div className="page-header position-relative">
                                <div className="header-title">
                                    <h1>
                                        Blank Page
                        </h1>
                                </div>

                                <div className="header-buttons">
                                    <a className="sidebar-toggler" href="#">
                                        <i className="fa fa-arrows-h"></i>
                                    </a>
                                    <a className="refresh" id="refresh-toggler" href="">
                                        <i className="fa fa-refresh"></i>
                                    </a>
                                    <a className="fullscreen" id="fullscreen-toggler" href="#">
                                        <i className="fa fa-arrows-alt"></i>
                                    </a>
                                </div>

                            </div>

                            <div className="page-body">
                                {this.props.children}
                            </div>
                        </div>
                    </div>

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
