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

interface IState {
    fullscreen: boolean;
    isSidebarHide: boolean;
}

class LayoutMainComponent extends React.Component<IProps, IState> {
    state = {
        fullscreen: false,
        isSidebarHide: false
    }

    reloadApp() {
        window.location.reload();
    }

    toggleFullscreen() {
        if (this.state.fullscreen) {
            this.setState({ fullscreen: false });
            const D: any = document;
            if (D.exitFullscreen) D.exitFullscreen();
            else if (D.mozCancelFullScreen) D.mozCancelFullScreen();
            else if (D.webkitExitFullscreen) D.webkitExitFullscreen();
        } else {
            this.setState({ fullscreen: true });
            const DE: any = document.documentElement;
            if (DE.requestFullscreen) DE.requestFullscreen();
            else if (DE.mozRequestFullScreen) DE.mozRequestFullScreen();
            else if (DE.webkitRequestFullscreen) DE.webkitRequestFullscreen();
            else if (DE.msRequestFullscreen) DE.msRequestFullscreen();
        }
    }

    toggleSidebar() {
        if (this.state.isSidebarHide) {
            this.setState({ isSidebarHide: false });
        } else {
            this.setState({ isSidebarHide: true });
        }
    }

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
                                    <h1>Blank Page</h1>
                                </div>

                                <div className="header-buttons">
                                    <a className={
                                        "sidebar-toggler cursor-pointer "
                                        + (this.state.isSidebarHide ? 'active' : '')
                                    }
                                        onClick={() => this.toggleSidebar()}>
                                        <i className="fa fa-arrows-h"></i>
                                    </a>
                                    <a className="refresh cursor-pointer" onClick={() => this.reloadApp()}>
                                        <i className="fa fa-refresh"></i>
                                    </a>
                                    <a className={
                                        "fullscreen cursor-pointer "
                                        + (this.state.fullscreen ? 'active' : '')
                                    }
                                        onClick={() => this.toggleFullscreen()}>
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
