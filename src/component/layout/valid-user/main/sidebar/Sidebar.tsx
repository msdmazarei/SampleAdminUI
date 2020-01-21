import React from "react";
import { redux_state } from "../../../../../redux/app_state";
import { MapDispatchToProps, connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TInternationalization } from "../../../../../config/setup";
import { BaseComponent } from "../../../../_base/BaseComponent";
import { History } from "history";
import { Localization } from "../../../../../config/localization/localization";
import { NavLink } from "react-router-dom";
import { ITheme_schema } from "../../../../../redux/action/theme/themeAction";

export interface IProps {
    internationalization: TInternationalization;
    history: History;
    theme: ITheme_schema;
}

class LayoutMainSidebarComponent extends BaseComponent<IProps, any>{
    isMenuActive(pathname: string): boolean {
        return this.props.history.location.pathname === pathname;
    }

    isMenuOpen(pathname_list: string[]): boolean {
        return pathname_list.includes(this.props.history.location.pathname);
    }

    render() {
        return (
            <>
                <div className={
                    "page-sidebar "
                    + (this.props.theme.isSidebarHide ? 'hide ' : '')
                    + (this.props.theme.sidebar === 'compact' ? 'menu-compact ' : '')
                }>
                    <div className="sidebar-header-wrapper">
                        <input type="text" className="searchinput" />
                        <i className="searchicon fa fa-search"></i>
                        <div className="searchhelper">Search Reports, Charts, Emails or Notifications</div>
                    </div>

                    <ul className="nav sidebar-menu">

                        <li className={this.isMenuActive('/dashboard') ? "active" : ''}>
                            <NavLink to="/dashboard" className="text-capitalize">
                                <i className="menu-icon fa fa-dashboard"></i>
                                <span className="menu-text"> {Localization.dashboard} </span>
                            </NavLink>
                        </li>

                        <li className={this.isMenuActive('/profile') ? "active" : ''}>
                            <NavLink to="/profile" className="text-capitalize">
                                <i className="menu-icon fa fa-picture-o"></i>
                                <span className="menu-text"> {Localization.profile} </span>
                            </NavLink>
                        </li>

                        <li className={this.isMenuOpen(['/blank']) ? 'open' : ''}>
                            <a className="menu-dropdown cursor-pointer">
                                <i className="menu-icon fa fa-link"></i>

                                <span className="menu-text">
                                    More Pages
                            </span>

                                <i className="menu-expand"></i>
                            </a>

                            <ul className="submenu">
                                <li>
                                    <NavLink to="/404" className="text-capitalize">
                                        <span className="menu-text">Error 404</span>
                                    </NavLink>
                                </li>
                                <li className={this.isMenuActive('/blank') ? "active" : ''}>
                                    <NavLink to="/blank" className="text-capitalize">
                                        <span className="menu-text">Blank Page</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <a href="#" className="menu-dropdown">
                                        <span className="menu-text">
                                            Multi Level Menu
                                    </span>
                                        <i className="menu-expand"></i>
                                    </a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="#">
                                                <i className="menu-icon fa fa-camera"></i>
                                                <span className="menu-text">Level 3</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="menu-dropdown">
                                                <i className="menu-icon fa fa-asterisk"></i>

                                                <span className="menu-text">
                                                    Level 4
                                            </span>
                                                <i className="menu-expand"></i>
                                            </a>

                                            <ul className="submenu">
                                                <li>
                                                    <a href="#">
                                                        <i className="menu-icon fa fa-bolt"></i>
                                                        <span className="menu-text">Some Item</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <i className="menu-icon fa fa-bug"></i>
                                                        <span className="menu-text">Another Item</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                    </ul>

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
        internationalization: state.internationalization,
        theme: state.theme,
    }
}

export const LayoutMainSidebar = connect(state2props, dispatch2props)(LayoutMainSidebarComponent);
