import React from 'react';
import { MapDispatchToProps, connect } from 'react-redux';
import { Dispatch } from 'redux';
import { redux_state } from '../../../../../redux/app_state';
import { History } from "history";
import { NETWORK_STATUS } from '../../../../../enum/NetworkStatus';
import { IUser } from '../../../../../model/model.user';
import { CmpUtility } from '../../../../_base/CmpUtility';
import { NavLink } from "react-router-dom";
import { Localization } from '../../../../../config/localization/localization';
import { Dropdown } from 'react-bootstrap';
import { TInternationalization } from '../../../../../config/setup';
import { action_change_app_flag } from '../../../../../redux/action/internationalization';
import { BaseComponent } from '../../../../_base/BaseComponent';

interface IProps {
    history: History;
    match: any;
    network_status: NETWORK_STATUS;
    logged_in_user: IUser | null;
    internationalization: TInternationalization;
    change_app_flag?: (internationalization: TInternationalization) => void;
}
interface IState {
}

class LayoutMainHeaderComponent extends BaseComponent<IProps, IState> {
    state = {
    }

    private changeLang(lang: string) {
        // debugger;
        if (!this.props.change_app_flag) return;
        if (lang === 'fa') {
            document.body.classList.add('rtl');
            Localization.setLanguage('fa');
            document.title = Localization.more;
            this.props.change_app_flag({
                rtl: true,
                language: 'فارسی',
                flag: 'fa',
            });
        } else if (lang === 'en') {
            document.body.classList.remove('rtl');
            Localization.setLanguage('en');
            document.title = Localization.more;
            this.props.change_app_flag({
                rtl: false,
                language: 'english',
                flag: 'en',
            });
        } else if (lang === 'ar') {
            document.body.classList.add('rtl');
            Localization.setLanguage('ar');
            document.title = Localization.more;
            this.props.change_app_flag({
                rtl: true,
                language: 'العربیه',
                flag: 'ar',
            });
        }

    }

    private logout() {
        this.onApplogout(this.props.history);
    }

    render() {
        const logged_in_user = this.props.logged_in_user;
        const username = logged_in_user ? logged_in_user.username : '';
        const fullname = logged_in_user ? CmpUtility.getPersonFullName(logged_in_user.person) : '';
        const email = logged_in_user ? logged_in_user.person.email : '';

        return (
            <>
                <div className="navbar">
                    <div className="navbar-inner">
                        <div className="navbar-container">

                            {/* <div className="navbar-header pull-left">
                                <a href="#" className="navbar-brand">
                                    <small>
                                        <img src="assets/img/logo.png" alt="" />
                                    </small>
                                </a>
                            </div> */}

                            <div className="sidebar-collapse" id="sidebar-collapse">
                                <i className="collapse-icon fa fa-bars"></i>
                            </div>

                            <div className="navbar-header pull-right">
                                <div className="navbar-account">
                                    <ul className="account-area">
                                        <li className="d-none">
                                            <a className=" dropdown-toggle" data-toggle="dropdown" title="Help" href="#">
                                                <i className="icon fa fa-warning"></i>
                                            </a>

                                            <ul className="pull-right dropdown-menu dropdown-arrow dropdown-notifications">
                                                <li>
                                                    <a href="#">
                                                        <div className="clearfix">
                                                            <div className="notification-icon">
                                                                <i className="fa fa-phone bg-themeprimary white"></i>
                                                            </div>
                                                            <div className="notification-body">
                                                                <span className="title">Skype meeting with Patty</span>
                                                                <span className="description">01:00 pm</span>
                                                            </div>
                                                            <div className="notification-extra">
                                                                <i className="fa fa-clock-o themeprimary"></i>
                                                                <span className="description">office</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="clearfix">
                                                            <div className="notification-icon">
                                                                <i className="fa fa-check bg-darkorange white"></i>
                                                            </div>
                                                            <div className="notification-body">
                                                                <span className="title">Uncharted break</span>
                                                                <span className="description">03:30 pm - 05:15 pm</span>
                                                            </div>
                                                            <div className="notification-extra">
                                                                <i className="fa fa-clock-o darkorange"></i>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="clearfix">
                                                            <div className="notification-icon">
                                                                <i className="fa fa-gift bg-warning white"></i>
                                                            </div>
                                                            <div className="notification-body">
                                                                <span className="title">Kate birthday party</span>
                                                                <span className="description">08:30 pm</span>
                                                            </div>
                                                            <div className="notification-extra">
                                                                <i className="fa fa-calendar warning"></i>
                                                                <i className="fa fa-clock-o warning"></i>
                                                                <span className="description">at home</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="clearfix">
                                                            <div className="notification-icon">
                                                                <i className="fa fa-glass bg-success white"></i>
                                                            </div>
                                                            <div className="notification-body">
                                                                <span className="title">Dinner with friends</span>
                                                                <span className="description">10:30 pm</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="dropdown-footer ">
                                                    <span>
                                                        Today, March 28
                                        </span>
                                                    <span className="pull-right">
                                                        10°c
                                            <i className="wi wi-cloudy"></i>
                                                    </span>
                                                </li>
                                            </ul>

                                        </li>
                                        <li className="d-none">
                                            <a className="dropdown-toggle" data-toggle="dropdown" title="Mails" href="#">
                                                <i className="icon fa fa-envelope"></i>
                                                <span className="badge">3</span>
                                            </a>

                                            <ul className="pull-right dropdown-menu dropdown-arrow dropdown-messages">
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/avatars/divyia.jpg" className="message-avatar" alt="Divyia Austin" />
                                                        <div className="message">
                                                            <span className="message-sender">
                                                                Divyia Austin
                                                </span>
                                                            <span className="message-time">
                                                                2 minutes ago
                                                </span>
                                                            <span className="message-subject">
                                                                Here's the recipe for apple pie
                                                </span>
                                                            <span className="message-body">
                                                                to identify the sending application when the senders image is shown for the main icon
                                                </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/avatars/bing.png" className="message-avatar" alt="Microsoft Bing" />
                                                        <div className="message">
                                                            <span className="message-sender">
                                                                Bing.com
                                                </span>
                                                            <span className="message-time">
                                                                Yesterday
                                                </span>
                                                            <span className="message-subject">
                                                                Bing Newsletter: The January Issue‏
                                                </span>
                                                            <span className="message-body">
                                                                Discover new music just in time for the Grammy® Awards.
                                                </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/avatars/adam-jansen.jpg" className="message-avatar" alt="Divyia Austin" />
                                                        <div className="message">
                                                            <span className="message-sender">
                                                                Nicolas
                                                </span>
                                                            <span className="message-time">
                                                                Friday, September 22
                                                </span>
                                                            <span className="message-subject">
                                                                New 4K Cameras
                                                </span>
                                                            <span className="message-body">
                                                                The 4K revolution has come over the horizon and is reaching the general populous
                                                </span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li className="d-none">
                                            <a className="dropdown-toggle" data-toggle="dropdown" title="Tasks" href="#">
                                                <i className="icon fa fa-tasks"></i>
                                                <span className="badge">4</span>
                                            </a>

                                            <ul className="pull-right dropdown-menu dropdown-tasks dropdown-arrow ">
                                                <li className="dropdown-header bordered-darkorange">
                                                    <i className="fa fa-tasks"></i>
                                                    4 Tasks In Progress
                                    </li>

                                                <li>
                                                    <a href="#">
                                                        <div className="clearfix">
                                                            <span className="pull-left">Account Creation</span>
                                                            <span className="pull-right">65%</span>
                                                        </div>

                                                        <div className="progress progress-xs">
                                                            <div style={{ width: '65%' }} className="progress-bar"></div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <div className="clearfix">
                                                            <span className="pull-left">Profile Data</span>
                                                            <span className="pull-right">35%</span>
                                                        </div>

                                                        <div className="progress progress-xs">
                                                            <div style={{ width: "35%" }} className="progress-bar progress-bar-success"></div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <div className="clearfix">
                                                            <span className="pull-left">Updating Resume</span>
                                                            <span className="pull-right">75%</span>
                                                        </div>

                                                        <div className="progress progress-xs">
                                                            <div style={{ width: "75%" }} className="progress-bar progress-bar-darkorange"></div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <div className="clearfix">
                                                            <span className="pull-left">Adding Contacts</span>
                                                            <span className="pull-right">10%</span>
                                                        </div>

                                                        <div className="progress progress-xs">
                                                            <div style={{ width: "10%" }} className="progress-bar progress-bar-warning"></div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li className="dropdown-footer">
                                                    <a href="#">
                                                        See All Tasks
                                        </a>
                                                    <button className="btn btn-xs btn-default shiny darkorange icon-only pull-right"><i className="fa fa-check"></i></button>
                                                </li>
                                            </ul>

                                        </li>
                                        <li className="d-none">
                                            <a className="wave in" id="chat-link" title="Chat" href="#">
                                                <i className="icon fa fa-comment"></i>
                                            </a>
                                        </li>
                                        <Dropdown as="li" >
                                            <Dropdown.Toggle
                                                as="a"
                                                id="dropdown-login-area"
                                                className="login-area"
                                            >
                                                <div className="avatar" title="View your public profile">
                                                    <img src="/static/media/img/icon/avatar.png" />
                                                </div>
                                                <section>
                                                    <h2><span className="profile"><span>{fullname}</span></span></h2>
                                                </section>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu as="ul" className="pull-right dropdown-arrow dropdown-login-area">
                                                <li className="username"><a>{username}</a></li>
                                                <li className="email"><a>{email}</a></li>

                                                <li>
                                                    <div className="avatar-area">
                                                        <img src="/static/media/img/icon/avatar.png" className="avatar" />
                                                        {/* <span className="caption">Change Photo</span> */}
                                                    </div>
                                                </li>

                                                <li className="edit">
                                                    {/* <a href="/profile.html" className="pull-left">Profile</a> */}
                                                    {/* <a href="#" className="pull-right">Setting</a> */}
                                                    <NavLink to="/profile" className="pull-left text-capitalize" activeClassName="active">
                                                        {Localization.profile}
                                                    </NavLink>
                                                </li>

                                                <li className="theme-area d-none">
                                                    <ul className="colorpicker" id="skin-changer">
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#5DB2FF" }} rel="assets/css/skins/blue.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#2dc3e8" }} rel="assets/css/skins/azure.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#03B3B2" }} rel="assets/css/skins/teal.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#53a93f" }} rel="assets/css/skins/green.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#FF8F32" }} rel="assets/css/skins/orange.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#cc324b" }} rel="assets/css/skins/pink.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#AC193D" }} rel="assets/css/skins/darkred.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#8C0095" }} rel="assets/css/skins/purple.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#0072C6" }} rel="assets/css/skins/darkblue.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#585858" }} rel="assets/css/skins/gray.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#474544" }} rel="assets/css/skins/black.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#001940" }} rel="assets/css/skins/deepblue.min.css"></a></li>
                                                    </ul>
                                                </li>

                                                <li className="language-area">
                                                    <ul className="languagepicker">
                                                        <li>
                                                            <a onClick={() => this.changeLang('fa')} title="فارسی">
                                                                <img src="/static/media/img/flag/ir.png" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a onClick={() => this.changeLang('en')} title="English">
                                                                <img src="/static/media/img/flag/us.png" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="dropdown-footer">
                                                    <a onClick={() => this.logout()}>
                                                        {Localization.Sign_out}
                                                    </a>
                                                </li>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <li className="d-none">
                                            <a className="login-area dropdown-toggle" data-toggle="dropdown">
                                                <div className="avatar" title="View your public profile">
                                                    <img src="/static/media/img/icon/avatar.png" />
                                                </div>
                                                <section>
                                                    <h2><span className="profile"><span>{fullname}</span></span></h2>
                                                </section>
                                            </a>

                                            <ul className="pull-right dropdown-menu dropdown-arrow dropdown-login-area">
                                                <li className="username"><a>{username}</a></li>
                                                <li className="email"><a>{email}</a></li>

                                                <li>
                                                    <div className="avatar-area">
                                                        <img src="/static/media/img/icon/avatar.png" className="avatar" />
                                                        {/* <span className="caption">Change Photo</span> */}
                                                    </div>
                                                </li>

                                                <li className="edit">
                                                    {/* <a href="/profile.html" className="pull-left">Profile</a> */}
                                                    {/* <a href="#" className="pull-right">Setting</a> */}
                                                    <NavLink to="/profile" className="pull-left text-capitalize" activeClassName="active">
                                                        {Localization.profile}
                                                    </NavLink>
                                                </li>

                                                <li className="theme-area d-none">
                                                    <ul className="colorpicker" id="skin-changer">
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#5DB2FF" }} rel="assets/css/skins/blue.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#2dc3e8" }} rel="assets/css/skins/azure.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#03B3B2" }} rel="assets/css/skins/teal.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#53a93f" }} rel="assets/css/skins/green.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#FF8F32" }} rel="assets/css/skins/orange.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#cc324b" }} rel="assets/css/skins/pink.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#AC193D" }} rel="assets/css/skins/darkred.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#8C0095" }} rel="assets/css/skins/purple.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#0072C6" }} rel="assets/css/skins/darkblue.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#585858" }} rel="assets/css/skins/gray.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#474544" }} rel="assets/css/skins/black.min.css"></a></li>
                                                        <li><a className="colorpick-btn" href="#" style={{ backgroundColor: "#001940" }} rel="assets/css/skins/deepblue.min.css"></a></li>
                                                    </ul>
                                                </li>

                                                <li className="language-area">
                                                    <ul className="languagepicker">
                                                        <li>
                                                            <a href="#" data-lang="fa" data-lang-dir="rtl" title="فارسی">
                                                                <img src="/static/media/img/flag/ir.png" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" data-lang="en" data-lang-dir="ltr" title="English">
                                                                <img src="/static/media/img/flag/us.png" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="dropdown-footer">
                                                    <a href="login.html">
                                                        Sign out
                                        </a>
                                                </li>
                                            </ul>

                                        </li>


                                    </ul>

                                    <div className="setting d-none">
                                        <a id="btn-setting" title="Setting" href="#">
                                            <i className="icon fa fa-gear"></i>
                                        </a>
                                    </div>
                                    <div className="setting-container">
                                        <label>
                                            <input type="checkbox" id="checkbox_fixednavbar" />
                                            <span className="text">Fixed Navbar</span>
                                        </label>
                                        <label>
                                            <input type="checkbox" id="checkbox_fixedsidebar" />
                                            <span className="text">Fixed SideBar</span>
                                        </label>
                                        <label>
                                            <input type="checkbox" id="checkbox_fixedbreadcrumbs" />
                                            <span className="text">Fixed BreadCrumbs</span>
                                        </label>
                                        <label>
                                            <input type="checkbox" id="checkbox_fixedheader" />
                                            <span className="text">Fixed Header</span>
                                        </label>
                                    </div>

                                </div>
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
        change_app_flag: (internationalization: TInternationalization) => dispatch(action_change_app_flag(internationalization)),
    }
}

const state2props = (state: redux_state) => {
    return {
        internationalization: state.internationalization,
        network_status: state.network_status,
        logged_in_user: state.logged_in_user,
    }
}

export const LayoutMainHeader = connect(state2props, dispatch2props)(LayoutMainHeaderComponent);
