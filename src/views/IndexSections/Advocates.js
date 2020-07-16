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
import CardImg from "reactstrap/es/CardImg";

class Advocates extends React.Component {
    render() {
        return (
            <>
                <section
                    className="section section-components pb-0"
                    id="section-components"
                >
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="12">
                                {/* Basic elements */}
                                <h2 className="text-uppercase  font-weight-bold">
                                    <span>Advocates</span>
                                </h2>
                                <Card className="shadow">
                                  {/*  <CardImg  alt="..."
                                              className="img-fluid rounded-circle shadow"
                                              src={require("assets/img/theme/team-2-800x800.jpg")}
                                              style={{ width: "150px" }}>
                                    </CardImg>*/}
                                    <CardBody>
                                        <small className="text-uppercase text-muted font-weight-bold">
                                            Ben Makasi Simiyu
                                        </small>
                                        <p className="description">
                                            Ben Makasi Simiyu is the senior partner in the law firm. He has sixteen (16)
                                            years’ experience in private legal practice. His areas of specialization
                                            include commercial law - reviewing all manner of contracts/agreements, civil
                                            litigation - debt collection, land law, environmental law, employment
                                            matters, insurance law, corporate law, judicial review as well as
                                            intellectual property law and alternative dispute resolution, among others.
                                        </p>
                                        <p className="description">
                                            Mr. Simiyu graduated from the University of Nairobi in the year 2001 with a
                                            Bachelor of Laws Degree (Second Class, Upper Division Honours). In the year
                                            2014, Mr. Simiyu graduated from the University of Nairobi with a Master of
                                            Laws (LL.M) Degree, specializing in International Trade and Investments Law.
                                            Some of the areas covered in the Master of Laws program aforesaid include
                                            Advanced Competition Law, Legal Regime of the World Trade Organization
                                            (WTO), GATT law, International Business Transactions Law, Corporate
                                            Governance and Maritime Law.
                                        </p>
                                        <p className="description">
                                            Prior to that, Mr. Simiyu had obtained a Diploma in Legal Studies from the
                                            Kenya School of Law in the year 2002 and was subsequently admitted as an
                                            Advocate of the High Court of Kenya in the year 2003. Before admission to
                                            the bar, Mr. Simiyu did his professional apprenticeship with the firm of
                                            Mereka & Company Advocates of Nairobi between the years 2001 and the first
                                            half of 2003.
                                        </p>
                                        <p className="description">
                                            Upon admission to the bar, Mr. Simiyu was retained as an Associate in the
                                            firm of Mereka & Company Advocates. Subsequently, Mr. Simiyu joined the firm
                                            of Muriu, Mungai & Company Advocates (MMC Africa Law) as an Associate in the
                                            Commercial/Litigation Department between May 2004 and February 2005. He
                                            moved in the same capacity to the firm of Iseme, Kamau & Maema Advocates
                                            (IKM Advocates) in March 2005 where he rose to the status of Senior
                                            Associate. He left the said firm in June 2008 and joined Wekesa & Simiyu
                                            Advocates as a Partner.
                                        </p>
                                        <p className="description">
                                            In the year 2017, Ben Makasi Simiyu founded Simiyu and Partners Advocates.
                                            The firm has grown from a sole proprietorship and been transformed into a
                                            limited liability partnership (LLP).
                                        </p>
                                        <p className="description">
                                            Mr. Simiyu is a Commissioner of Oaths as well as Notary Public. He is an
                                            Associate of the Chartered Institute of Arbitrators, London (Kenya Chapter).
                                            He is currently in the process of pursuing membership of the same
                                            organization.
                                        </p>
                                    </CardBody>
                                </Card>
                                <p>

                                </p>
                                <Card className="shadow">
                                    <CardBody>
                                        <small className="text-uppercase text-muted font-weight-bold">
                                            Tessy D. W. Nabalayo
                                        </small>
                                        <p className="description">
                                            Tessy D. W. Nabalayo - holds a Bachelor of Laws Degree from the University
                                            of Nairobi where she graduated in the year 2009. Subsequently thereafter,
                                            she obtained a Diploma in Legal Studies from Kenya School of Law. She was
                                            admitted as an advocate of the High Court of Kenya in 2012 and worked for
                                            Kilonzo & Company Advocates, Masinde & Company Advocates, Wekesa & Simiyu
                                            Advocates before joining the firm of Simiyu & Partners Advocates. Ms. Wakoli
                                            handles insurance, litigation, employment, conveyancing, debt collection and
                                            commercial law matters.
                                        </p>
                                    </CardBody>
                                </Card>
                                <p>

                                </p>
                                <Card className="shadow">
                                    <CardBody>
                                        <small className="text-uppercase text-muted font-weight-bold">
                                            Elaine Wahito Gathimba
                                        </small>
                                        <p className="description">
                                            Elaine Wahito Gathimba holds a Bachelor of Laws Degree from the Catholic
                                            University of Eastern Africa and a Diploma in Legal Studies from Kenya
                                            School of Law. She was admitted as an Advocate of the High Court of Kenya in
                                            2017. She undertook her pupilage in the firm of Wekesa & Simiyu Advocates.
                                            Ms. Gathimba joined the firm of Simiyu and Partners in late 2017 and handles
                                            among others, insurance, litigation, employment, conveyancing, debt
                                            collection and commercial law matters.
                                        </p>
                                    </CardBody>
                                </Card>
                                <p>

                                </p>
                                <Card className="shadow">
                                    <CardBody>
                                        <small className="text-uppercase text-muted font-weight-bold">
                                            Tracy Wagasa Shirao
                                        </small>
                                        <p className="description">
                                            Tracy Wagasa Shirao holds a Bachelor of Laws Degree from the Catholic
                                            University of Eastern Africa. . She interned at the firm of Wekesa & Simiyu
                                            Advocates prior to her admission to the bar in the year 2019. Tracy is a
                                            very versatile lawyer and handles among others, insurance, litigation,
                                            employment, conveyancing, debt collection and commercial law matters.
                                        </p>
                                    </CardBody>
                                </Card>
                                <p>

                                </p>
                                <Card className="shadow">
                                    <CardBody>
                                        <small className="text-uppercase text-muted font-weight-bold">
                                            James Juma
                                        </small>
                                        <p className="description">
                                            James Juma graduated from the University of Nairobi’s School of Law in the year 2018. He is preparing to join the Kenya School of Law in the year 2020.
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

export default Advocates;
