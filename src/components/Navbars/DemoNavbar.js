/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {Link} from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
//import {NavHashLink as NavLink} from 'react-router-hash-link';
// reactstrap components
import {
    Button,
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,
    Navbar,
    NavLink,
    NavItem,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
    componentDidMount() {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
    }

    state = {
        collapseClasses: "",
        collapseOpen: false
    };

    onExiting = () => {
        this.setState({
            collapseClasses: "collapsing-out"
        });
    };

    onExited = () => {
        this.setState({
            collapseClasses: ""
        });
    };

    render() {
        return (
            <>
                <header className="header-global">
                    <Navbar
                        className="navbar-main navbar-transparent navbar-light headroom flex-column"
                        expand="lg"
                        id="navbar-main"
                    >
                        {/* <img className="bannerHeight"
                             alt="..."
                             src={require("assets/img/brand/splogo.jpeg")}
                        />*/}
                        <Container>
                            <NavbarBrand className="mr-lg-10" href="/#">
                                <img
                                    alt="..."
                                    src={require("assets/img/brand/splogo.jpeg")}
                                />
                            </NavbarBrand>
                            <button className="navbar-toggler" id="navbar_global">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <UncontrolledCollapse
                                toggler="#navbar_global"
                                navbar
                                className={this.state.collapseClasses}
                                onExiting={this.onExiting}
                                onExited={this.onExited}
                            >
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <Link to="/">

                                            </Link>
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar_global">
                                                <span/>
                                                <span/>
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                    <UncontrolledDropdown nav>
                                        <NavLink to="/">
                                            HOME
                                        </NavLink>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-ui-04 d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">ABOUT US</span>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-xl">
                                            <div className="dropdown-menu-inner">
                                                <Media
                                                    className="d-flex align-items-center"
                                                    to="/"
                                                    target="_blank"
                                                >
                                                    <div
                                                        className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                        <i className="ni ni-spaceship"/>
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <NavLink href="/#mission_statement"><h6 className="heading text-primary mb-md-1">
                                                            MISSION STATEMENT
                                                        </h6></NavLink>
                                                    </Media>
                                                </Media>
                                                <Media
                                                    className="d-flex align-items-center"
                                                    href="/"
                                                    target="_blank"
                                                >

                                                    <div
                                                        className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <i className="ni ni-palette"/>
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <NavLink href="/#professional_training">
                                                            <h6 className="heading text-primary mb-md-1">
                                                                PROFESSIONAL TRAINING
                                                            </h6>
                                                        </NavLink>

                                                    </Media>


                                                </Media>
                                                <Media
                                                    className="d-flex align-items-center"
                                                    href="/"
                                                    target="_blank"
                                                >
                                                    <div
                                                        className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i className="ni ni-ui-04"/>
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <NavLink href="/#facilities"><h5 className="heading text-warning mb-md-1">
                                                            FACILITIES/EQUIPMENTS
                                                        </h5></NavLink>
                                                    </Media>
                                                </Media>
                                                <Media
                                                    className="d-flex align-items-center"
                                                    href="/"
                                                    target="_blank"
                                                >
                                                    <div
                                                        className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i className="ni ni-time-alarm"/>
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <NavLink href="/#turnaround_time"><h5 className="heading text-warning mb-md-1">
                                                            TURNAROUND TIME
                                                        </h5></NavLink>
                                                    </Media>
                                                </Media>
                                            </div>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-collection d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">OUR PEOPLE</span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href="/#advocates" >
                                                Advocates
                                            </DropdownItem>
                                            <DropdownItem href="/#support_staff">
                                                Support Staff
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-collection d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">PRACTICE AREAS</span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href="/#Public_Law">
                                                Public Law and Civil Litigation
                                            </DropdownItem>
                                            <DropdownItem href="/#Corporate_Structuring">
                                                Corporate Structuring, Mergers and Acquisitions &Regulatory Advice
                                            </DropdownItem>
                                            <DropdownItem href="/#Banking_and">
                                                Banking and Finance
                                            </DropdownItem>
                                            <DropdownItem href="/#Conveyancing">
                                                Conveyancing
                                            </DropdownItem>
                                            <DropdownItem href="/#Employment">
                                                Employment, Labour and Industrial Disputes
                                            </DropdownItem>
                                            <DropdownItem href="/#Arbitration_and">
                                                Arbitration and Alternative Dispute Resolution
                                            </DropdownItem>
                                            <DropdownItem href="/#Procurement_Disputes">
                                                Procurement Disputes
                                            </DropdownItem>
                                            <DropdownItem href="/#Legal_Audits">
                                                Legal Audits
                                            </DropdownItem>
                                            <DropdownItem href="/#Taxation">
                                                Taxation
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <NavLink to="/cases-handled" tag={Link} nav>
                                        SOME CASES HANDLED
                                    </NavLink>
                                    <NavLink  href="/#professional_training"  nav>
                                        CUSTOMER CARE
                                    </NavLink>
                                    <NavLink  href="/#contact"  nav>
                                        CONTACT US
                                    </NavLink>
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
}

export default DemoNavbar;
