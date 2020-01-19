import React from "react";
import { redux_state } from "../../../../../redux/app_state";
import { MapDispatchToProps, connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TInternationalization } from "../../../../../config/setup";
import { IUser } from "../../../../../model/model.user";
import { BaseComponent } from "../../../../_base/BaseComponent";
import { History } from "history";
import { Localization } from "../../../../../config/localization/localization";
import { NavLink } from "react-router-dom";

export interface IProps {
    internationalization: TInternationalization;
    logged_in_user?: IUser | null;
    history: History;
}

class LayoutMainSidebarComponent extends BaseComponent<IProps, any>{
    isMenuActive(pathname: string): boolean {
        console.log(this.props.history.location);
        return this.props.history.location.pathname === pathname;
    }

    render() {
        return (
            <>
                <div className="page-sidebar" id="sidebar">
                    <div className="sidebar-header-wrapper">
                        <input type="text" className="searchinput" />
                        <i className="searchicon fa fa-search"></i>
                        <div className="searchhelper">Search Reports, Charts, Emails or Notifications</div>
                    </div>

                    <ul className="nav sidebar-menu">

                        <li className={this.isMenuActive('/dashboard') ? "active" : ''}>
                            <NavLink to="/dashboard" className="text-capitalize">
                                <i className="menu-icon fa fa-home"></i>
                                <span className="menu-text"> {Localization.dashboard} </span>
                            </NavLink>
                            {/* <a href="index.html">
                                <i className="menu-icon fa fa-home"></i>
                                <span className="menu-text"> {Localization.dashboard} </span>
                            </a> */}
                        </li>

                        <li>
                            <a href="databoxes.html">
                                <i className="menu-icon fa fa-tasks"></i>
                                <span className="menu-text"> Data Boxes </span>
                            </a>
                        </li>

                        <li>
                            <a href="widgets.html">
                                <i className="menu-icon fa fa-th"></i>
                                <span className="menu-text"> Widgets </span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="menu-dropdown">
                                <i className="menu-icon fa fa-desktop"></i>
                                <span className="menu-text"> Elements </span>

                                <i className="menu-expand"></i>
                            </a>

                            <ul className="submenu">
                                <li>
                                    <a href="elements.html">
                                        <span className="menu-text">Basic Elements</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="menu-dropdown">
                                        <span className="menu-text">
                                            Icons
                                    </span>
                                        <i className="menu-expand"></i>
                                    </a>

                                    <ul className="submenu">
                                        <li>
                                            <a href="font-awesome.html">
                                                <i className="menu-icon fa fa-rocket"></i>
                                                <span className="menu-text">Font Awesome</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="glyph-icons.html">
                                                <i className="menu-icon fa fa-home"></i>
                                                <span className="menu-text">Glyph Icons</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="typicon.html">
                                                <i className="menu-icon typcn typcn-location-outline"></i>
                                                <span className="menu-text"> Typicons</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="weather-icons.html">
                                                <i className="menu-icon wi wi-hot"></i>
                                                <span className="menu-text">Weather Icons</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="tabs.html">
                                        <span className="menu-text">Tabs & Accordions</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="alerts.html">
                                        <span className="menu-text">Alerts & Tooltips</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="modals.html">
                                        <span className="menu-text">Modals & Wells</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="buttons.html">
                                        <span className="menu-text">Buttons</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="nestable-list.html">
                                        <span className="menu-text"> Nestable List</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="treeview.html">
                                        <span className="menu-text">Treeview</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="#" className="menu-dropdown">
                                <i className="menu-icon fa fa-table"></i>
                                <span className="menu-text"> Tables </span>

                                <i className="menu-expand"></i>
                            </a>

                            <ul className="submenu">
                                <li>
                                    <a href="tables-simple.html">
                                        <span className="menu-text">Simple & Responsive</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tables-data.html">
                                        <span className="menu-text">Data Tables</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="menu-dropdown">
                                <i className="menu-icon fa fa-pencil-square-o"></i>
                                <span className="menu-text"> Forms </span>

                                <i className="menu-expand"></i>
                            </a>

                            <ul className="submenu">
                                <li>
                                    <a href="form-layouts.html">
                                        <span className="menu-text">Form Layouts</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="form-inputs.html">
                                        <span className="menu-text">Form Inputs</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="form-pickers.html">
                                        <span className="menu-text">Data Pickers</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="form-wizard.html">
                                        <span className="menu-text">Wizard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="form-validation.html">
                                        <span className="menu-text">Validation</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="form-editors.html">
                                        <span className="menu-text">Editors</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="form-inputmask.html">
                                        <span className="menu-text">Input Mask</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="#" className="menu-dropdown">
                                <i className="menu-icon fa fa-bar-chart-o"></i>
                                <span className="menu-text"> Charts </span>

                                <i className="menu-expand"></i>
                            </a>

                            <ul className="submenu">
                                <li>
                                    <a href="flot.html">
                                        <span className="menu-text">Flot Charts</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="morris.html">
                                        <span className="menu-text"> Morris Charts</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="sparkline.html">
                                        <span className="menu-text">Sparkline Charts</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="easypiecharts.html">
                                        <span className="menu-text">Easy Pie Charts</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="chartjs.html">
                                        <span className="menu-text"> ChartJS</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="profile.html">
                                <i className="menu-icon fa fa-picture-o"></i>
                                <span className="menu-text">Profile</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="menu-dropdown">
                                <i className="menu-icon fa fa-envelope-o"></i>
                                <span className="menu-text"> Mail </span>

                                <i className="menu-expand"></i>
                            </a>

                            <ul className="submenu">
                                <li>
                                    <a href="inbox.html">
                                        <span className="menu-text">Inbox</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="message-view.html">
                                        <span className="menu-text">View Message</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="message-compose.html">
                                        <span className="menu-text">Compose Message</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="calendar.html">
                                <i className="menu-icon fa fa-calendar"></i>
                                <span className="menu-text">
                                    Calendar
                            </span>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="menu-dropdown">
                                <i className="menu-icon fa fa-paperclip"></i>
                                <span className="menu-text"> Pages </span>

                                <i className="menu-expand"></i>
                            </a>
                            <ul className="submenu">
                                <li>
                                    <a href="timeline.html">
                                        <span className="menu-text">Timeline</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="pricing.html">
                                        <span className="menu-text">Pricing Tables</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="invoice.html">
                                        <span className="menu-text">Invoice</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="login.html">
                                        <span className="menu-text">Login</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="register.html">
                                        <span className="menu-text">Register</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="lock.html">
                                        <span className="menu-text">Lock Screen</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="typography.html">
                                        <span className="menu-text"> Typography </span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="active open">
                            <a href="#" className="menu-dropdown">
                                <i className="menu-icon fa fa-link"></i>

                                <span className="menu-text">
                                    More Pages
                            </span>

                                <i className="menu-expand"></i>
                            </a>

                            <ul className="submenu">
                                <li>
                                    <a href="error-404.html">
                                        <span className="menu-text">Error 404</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="error-500.html">
                                        <span className="menu-text"> Error 500</span>
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="blank.html">
                                        <span className="menu-text">Blank Page</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="grid.html">
                                        <span className="menu-text"> Grid</span>
                                    </a>
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

                        <li>
                            <a href="#" className="menu-dropdown">
                                <i className="menu-icon fa fa-align-right"></i>
                                <span className="menu-text"> Right to Left </span>

                                <i className="menu-expand"></i>
                            </a>
                            <ul className="submenu">
                                <li>
                                    <a>
                                        <span className="menu-text">RTL</span>
                                        <label className="pull-right margin-top-10">
                                            <input id="rtl-changer" className="checkbox-slider slider-icon colored-primary" type="checkbox" />
                                            <span className="text"></span>
                                        </label>
                                    </a>
                                </li>
                                <li>
                                    <a href="index-rtl-ar.html">
                                        <span className="menu-text">Arabic Layout</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="index-rtl-fa.html">
                                        <span className="menu-text">Persian Layout</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="versions.html">
                                <i className="menu-icon fa fa-home themesecondary"></i>
                                <span className="menu-text">
                                    CatodAdmin Versions
                            </span>
                            </a>
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
        logged_in_user: state.logged_in_user,
    }
}

export const LayoutMainSidebar = connect(state2props, dispatch2props)(LayoutMainSidebarComponent);
