import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="loading-container loading-inactive">
          <div className="loader"></div>
        </div>

        <div className="navbar">
          <div className="navbar-inner">
            <div className="navbar-container">

              <div className="navbar-header pull-left">
                <a href="#" className="navbar-brand">
                  <small>
                    <img src="assets/img/logo.png" alt="" />
                  </small>
                </a>
              </div>

              <div className="sidebar-collapse" id="sidebar-collapse">
                <i className="collapse-icon fa fa-bars"></i>
              </div>

              <div className="navbar-header pull-right">
                <div className="navbar-account">
                  <ul className="account-area">
                    <li>
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
                    <li>
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

                    <li>
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
                    <li>
                      <a className="wave in" id="chat-link" title="Chat" href="#">
                        <i className="icon fa fa-comment"></i>
                      </a>
                    </li>
                    <li>
                      <a className="login-area dropdown-toggle" data-toggle="dropdown">
                        <div className="avatar" title="View your public profile">
                          <img src="/static/media/img/icon/avatar.png" />
                        </div>
                        <section>
                          <h2><span className="profile"><span>David Stevenson</span></span></h2>
                        </section>
                      </a>

                      <ul className="pull-right dropdown-menu dropdown-arrow dropdown-login-area">
                        <li className="username"><a>David Stevenson</a></li>
                        <li className="email"><a>David.Stevenson@live.com</a></li>

                        <li>
                          <div className="avatar-area">
                            <img src="/static/media/img/icon/avatar.png" className="avatar" />
                            <span className="caption">Change Photo</span>
                          </div>
                        </li>

                        <li className="edit">
                          <a href="profile.html" className="pull-left">Profile</a>
                          <a href="#" className="pull-right">Setting</a>
                        </li>

                        <li className="theme-area">
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

                  <div className="setting">
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



        <div className="main-container container-fluid">
          <div className="page-container">
            <div className="page-sidebar" id="sidebar">
              <div className="sidebar-header-wrapper">
                <input type="text" className="searchinput" />
                <i className="searchicon fa fa-search"></i>
                <div className="searchhelper">Search Reports, Charts, Emails or Notifications</div>
              </div>

              <ul className="nav sidebar-menu">

                <li>
                  <a href="index.html">
                    <i className="menu-icon fa fa-home"></i>
                    <span className="menu-text"> Dashboard </span>
                  </a>
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


            <div id="chatbar" className="page-chatbar">
              <div className="chatbar-contacts">
                <div className="contacts-search">
                  <input type="text" className="searchinput" placeholder="Search Contacts" />
                  <i className="searchicon fa fa-search"></i>
                  <div className="searchhelper">Search Your Contacts and Chat History</div>
                </div>
                <ul className="contacts-list">
                  <li className="contact">
                    <div className="contact-avatar">
                      <img src="assets/img/avatars/divyia.jpg" />
                    </div>
                    <div className="contact-info">
                      <div className="contact-name">Divyia Philips</div>
                      <div className="contact-status">
                        <div className="online"></div>
                        <div className="status">online</div>
                      </div>
                      <div className="last-chat-time">
                        last week
                                </div>
                    </div>
                  </li>
                  <li className="contact">
                    <div className="contact-avatar">
                      <img src="assets/img/avatars/Nicolai-Larson.jpg" />
                    </div>
                    <div className="contact-info">
                      <div className="contact-name">Adam Johnson</div>
                      <div className="contact-status">
                        <div className="offline"></div>
                        <div className="status">left 4 mins ago</div>
                      </div>
                      <div className="last-chat-time">
                        today
                                </div>
                    </div>
                  </li>
                  <li className="contact">
                    <div className="contact-avatar">
                      <img src="assets/img/avatars/John-Smith.jpg" />
                    </div>
                    <div className="contact-info">
                      <div className="contact-name">John Smith</div>
                      <div className="contact-status">
                        <div className="online"></div>
                        <div className="status">online</div>
                      </div>
                      <div className="last-chat-time">
                        1:57 am
                                </div>
                    </div>
                  </li>
                  <li className="contact">
                    <div className="contact-avatar">
                      <img src="assets/img/avatars/Osvaldus-Valutis.jpg" />
                    </div>
                    <div className="contact-info">
                      <div className="contact-name">Osvaldus Valutis</div>
                      <div className="contact-status">
                        <div className="online"></div>
                        <div className="status">online</div>
                      </div>
                      <div className="last-chat-time">
                        today
                                </div>
                    </div>
                  </li>
                  <li className="contact">
                    <div className="contact-avatar">
                      <img src="assets/img/avatars/Javi-Jimenez.jpg" />
                    </div>
                    <div className="contact-info">
                      <div className="contact-name">Javi Jimenez</div>
                      <div className="contact-status">
                        <div className="online"></div>
                        <div className="status">online</div>
                      </div>
                      <div className="last-chat-time">
                        today
                                </div>
                    </div>
                  </li>
                  <li className="contact">
                    <div className="contact-avatar">
                      <img src="assets/img/avatars/Stephanie-Walter.jpg" />
                    </div>
                    <div className="contact-info">
                      <div className="contact-name">Stephanie Walter</div>
                      <div className="contact-status">
                        <div className="online"></div>
                        <div className="status">online</div>
                      </div>
                      <div className="last-chat-time">
                        yesterday
                                </div>
                    </div>
                  </li>
                  <li className="contact">
                    <div className="contact-avatar">
                      <img src="assets/img/avatars/Sergey-Azovskiy.jpg" />
                    </div>
                    <div className="contact-info">
                      <div className="contact-name">Sergey Azovskiy</div>
                      <div className="contact-status">
                        <div className="offline"></div>
                        <div className="status">offline since oct 24</div>
                      </div>
                      <div className="last-chat-time">
                        22 oct
                                </div>
                    </div>
                  </li>
                  <li className="contact">
                    <div className="contact-avatar">
                      <img src="assets/img/avatars/Lee-Munroe.jpg" />
                    </div>
                    <div className="contact-info">
                      <div className="contact-name">Lee Munroe</div>
                      <div className="contact-status">
                        <div className="online"></div>
                        <div className="status">online</div>
                      </div>
                      <div className="last-chat-time">
                        today
                                </div>
                    </div>
                  </li>
                  <li className="contact">
                    <div className="contact-avatar">
                      <img src="assets/img/avatars/divyia.jpg" />
                    </div>
                    <div className="contact-info">
                      <div className="contact-name">Divyia Philips</div>
                      <div className="contact-status">
                        <div className="online"></div>
                        <div className="status">online</div>
                      </div>
                      <div className="last-chat-time">
                        last week
                                </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="chatbar-messages" style={{ display: "none" }}>
                <div className="messages-contact">
                  <div className="contact-avatar">
                    <img src="assets/img/avatars/divyia.jpg" />
                  </div>
                  <div className="contact-info">
                    <div className="contact-name">Divyia Philips</div>
                    <div className="contact-status">
                      <div className="online"></div>
                      <div className="status">online</div>
                    </div>
                    <div className="last-chat-time">
                      a moment ago
                            </div>
                    <div className="back">
                      <i className="fa fa-arrow-circle-left"></i>
                    </div>
                  </div>
                </div>
                <ul className="messages-list">
                  <li className="message">
                    <div className="message-info">
                      <div className="bullet"></div>
                      <div className="contact-name">Me</div>
                      <div className="message-time">10:14 AM, Today</div>
                    </div>
                    <div className="message-body">
                      Hi, Hope all is good. Are we meeting today?
                            </div>
                  </li>
                  <li className="message reply">
                    <div className="message-info">
                      <div className="bullet"></div>
                      <div className="contact-name">Divyia</div>
                      <div className="message-time">10:15 AM, Today</div>
                    </div>
                    <div className="message-body">
                      Hi, Hope all is good. Are we meeting today?
                            </div>
                  </li>
                  <li className="message">
                    <div className="message-info">
                      <div className="bullet"></div>
                      <div className="contact-name">Me</div>
                      <div className="message-time">10:14 AM, Today</div>
                    </div>
                    <div className="message-body">
                      Hi, Hope all is good. Are we meeting today?
                            </div>
                  </li>
                  <li className="message reply">
                    <div className="message-info">
                      <div className="bullet"></div>
                      <div className="contact-name">Divyia</div>
                      <div className="message-time">10:15 AM, Today</div>
                    </div>
                    <div className="message-body">
                      Hi, Hope all is good. Are we meeting today?
                            </div>
                  </li>
                  <li className="message">
                    <div className="message-info">
                      <div className="bullet"></div>
                      <div className="contact-name">Me</div>
                      <div className="message-time">10:14 AM, Today</div>
                    </div>
                    <div className="message-body">
                      Hi, Hope all is good. Are we meeting today?
                            </div>
                  </li>
                  <li className="message reply">
                    <div className="message-info">
                      <div className="bullet"></div>
                      <div className="contact-name">Divyia</div>
                      <div className="message-time">10:15 AM, Today</div>
                    </div>
                    <div className="message-body">
                      Hi, Hope all is good. Are we meeting today?
                            </div>
                  </li>
                </ul>
                <div className="send-message">
                  <span className="input-icon icon-right">
                    <textarea rows={4} className="form-control" placeholder="Type your message"></textarea>
                    <i className="fa fa-camera themeprimary"></i>
                  </span>
                </div>
              </div>
            </div>


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

              </div>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default App;
