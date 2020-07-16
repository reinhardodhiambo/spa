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

// reactstrap components
import {Button, Container, Row, Col, Card, CardBody, TabContent, TabPane} from "reactstrap";

class SupportStaff extends React.Component {
    render() {
        return (
            <>
                <section
                    className="section section-components pb-0 bg-secondary"
                    id="section-components"
                >
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="12">
                                {/* Basic elements */}
                                <h2 className="text-uppercase  font-weight-bold">
                                    <span>Support Staff</span>
                                </h2>
                                <Card className="shadow">
                                    <CardBody>
                                        <small className="text-uppercase text-muted font-weight-bold">
                                            Frank Nguti
                                        </small>
                                        <p className="description">
                                            Frank Nguti is an Accountant at the firm of Simiyu and Partners Advocates.
                                            He is a trained Accountant having undergone examinations offered by the
                                            KASNEB among other bodies. Frank is in charge of the firm’s accounting and
                                            debt collection portfolio.
                                        </p>
                                    </CardBody>
                                </Card>
                                <p>

                                </p>
                                <Card className="shadow">
                                    <CardBody>
                                        <small className="text-uppercase text-muted font-weight-bold">
                                            Metrine Wachie
                                        </small>
                                        <p className="description">
                                            Metrine Wachie is the Office Manager and oversees the general administration
                                            of the firm. She is a qualified human resources practitioner. Metrine is in
                                            charge of the firm’s front office, secretarial as well as public relations
                                            docket.
                                        </p>
                                    </CardBody>
                                </Card>
                                <p>

                                </p>
                                <Card className="shadow">
                                    <CardBody>
                                        <small className="text-uppercase text-muted font-weight-bold">
                                            Ivy Doresi
                                        </small>
                                        <p className="description">
                                            Ivy Doresi is a competent and qualified clerk in charge of the of the firm’s
                                            registry. She has experience in registries notably at the courts, lands,
                                            companies and Kenya Industrial Property Institute.
                                        </p>
                                    </CardBody>
                                </Card>
                                <p>

                                </p>
                                <Card className="shadow">
                                    <CardBody>
                                        <small className="text-uppercase text-muted font-weight-bold">
                                            Marlyne Chimano
                                        </small>
                                        <p className="description">
                                            Marlyne Chimano is employed as the office driver and dispatch clerk. He
                                            ensures that deliveries are undertaken in a timely as well as expeditious
                                            manner.
                                        </p>
                                    </CardBody>
                                </Card>
                                <p>

                                </p>
                                <Card className="shadow">
                                    <CardBody>
                                        <small className="text-uppercase text-muted font-weight-bold">
                                            Byron Chesoli
                                        </small>
                                        <p className="description">
                                            Byron Chesoli handles the firm’s information Technology (IT) consultancy
                                            docket.
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default SupportStaff;
