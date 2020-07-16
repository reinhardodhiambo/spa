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
/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
    Button,
    Card,
    CardImg,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
    render() {
        return (
            <>
                <footer className="footer has-cards">
                    <Container>
                        <Row className="row-grid align-items-center my-md">
                        </Row>
                        <hr/>
                        <Row className="align-items-center justify-content-md-between">
                            <Col md="6">
                                <div className="copyright">
                                    © {new Date().getFullYear()}{" "}
                                    <a
                                        href="/"
                                        target="_blank"
                                    >
                                        SIMIYU & PARTNERS ADVOCATES LIMITED LIABILITY PARTNERSHIP
                                    </a>
                                    .
                                </div>
                            </Col>
                            <Col md="6">
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </>
        );
    }
}

export default CardsFooter;
