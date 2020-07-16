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
    NavItem,
    NavLink,
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
                        <img className="bannerHeight"
                             alt="..."
                             src={require("assets/img/brand/splogo.jpeg")}
                        />
                        <Container>
                            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                                {/* <img
                  alt="..."
                  src={require("assets/img/brand/argon-react-white.png")}
                />*/}
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
                                        <DropdownToggle nav>
                                            <i className="ni ni-ui-04 d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">Home</span>
                                        </DropdownToggle>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-ui-04 d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">About Us</span>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-xl">
                                            <div className="dropdown-menu-inner">
                                                <Media
                                                    className="d-flex align-items-center"
                                                    href="/"
                                                    target="_blank"
                                                >
                                                    <div
                                                        className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                        <i className="ni ni-spaceship"/>
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <h6 className="heading text-primary mb-md-1">
                                                            Mission Statement
                                                        </h6>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Simiyu and Partners Advocates’ LLP mission is to render as
                                                            well as deliver professional legal services of the highest
                                                            standards with the utmost speed and to secure positive
                                                            results at competitive costs to its clients.
                                                        </p>
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
                                                        <h6 className="heading text-primary mb-md-1">
                                                            Professional Training
                                                        </h6>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Learn more about colors, typography, icons and the
                                                            grid system we used for Argon.
                                                        </p>
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
                                                        <h5 className="heading text-warning mb-md-1">
                                                            Facilities/Equipments
                                                        </h5>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Browse our 50 beautiful handcrafted components
                                                            offered in the Free version.
                                                        </p>
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
                                                        <h5 className="heading text-warning mb-md-1">
                                                            Turnaround Time
                                                        </h5>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Browse our 50 beautiful handcrafted components
                                                            offered in the Free version.
                                                        </p>
                                                    </Media>
                                                </Media>
                                            </div>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-collection d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">Our People</span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem to="/" tag={Link}>
                                                Advocates
                                            </DropdownItem>
                                            <DropdownItem to="/" tag={Link}>
                                                Support Staff
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-collection d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">Practice Areas</span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem to="/" tag={Link}>
                                                Public Law and Civil Litigation
                                            </DropdownItem>
                                            <DropdownItem to="/" tag={Link}>
                                                Corporate Structuring, Mergers and Acquisitions &Regulatory Advice
                                            </DropdownItem>
                                            <DropdownItem to="/" tag={Link}>
                                                Banking and Finance
                                            </DropdownItem>
                                            <DropdownItem to="/" tag={Link}>
                                                Conveyancing
                                            </DropdownItem>
                                            <DropdownItem to="/" tag={Link}>
                                                Employment, Labour and Industrial Disputes
                                            </DropdownItem>
                                            <DropdownItem to="/" tag={Link}>
                                                Arbitration andAlternative Dispute Resolution
                                            </DropdownItem>
                                            <DropdownItem to="/" tag={Link}>
                                                Procurement Disputes
                                            </DropdownItem>
                                            <DropdownItem to="/" tag={Link}>
                                                Legal Audits
                                            </DropdownItem>
                                            <DropdownItem to="/" tag={Link}>
                                                Taxation
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
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
