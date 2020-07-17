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
import {Button, Card, Container, Row, Col} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import CardsFooter from "../../components/Footers/CardsFooter";

class CasesHandled extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    render() {
        return (
            <>
                <DemoNavbar/>
                <main ref="main">

                    <section className="section-profile-cover section-shaped my-0">
                        {/* Circles background */}
                        <div className="shape shape-style-1 shape-default alpha-4 ">
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <polygon
                                    className="fill-white"
                                    points="2560 0 2560 100 0 100"
                                />
                            </svg>
                        </div>
                    </section>
                    <section className="section section-components pb-0" id="section-components">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    {/* Basic elements */}
                                    <h2 className="text-uppercase  font-weight-bold">
                                        <small>SOME OF THE CASES HANDLED BY THE FIRM OF SIMIYU AND PARTNERS ADVOCATES
                                            LIMITED
                                            LIABILITY PARTNERSHIP AND OR ITS ADVOCATES</small>
                                    </h2>
                                    <ol>
                                        <li><p className="lead">
                                            Prepared a comprehensive legal opinion for one of the leading civil aviation
                                            authorities in Africa regarding the legality of facilitation of payment of
                                            ransom
                                            money to pirates by aircrafts registered in Kenya.
                                        </p></li>
                                        <li><p className="lead">
                                            Instructed by one of the local public universities to defend the degrees it
                                            had
                                            lawfully awarded to its engineering students and which degrees were not
                                            being
                                            recognized by the Kenya Engineers Registration Board.
                                        </p></li>
                                        <li><p className="lead">
                                            Defended a leading cement manufacturer in Kenya against judicial review
                                            proceedings
                                            filed by squatters who had invaded the land it uses for mining one of the
                                            raw
                                            materials in cement production and which action had threatened operations of
                                            the
                                            company through loss of millions of shillings as well as employment of
                                            thousands of
                                            workers who rely on the company for survival.
                                        </p></li>
                                        <li><p className="lead">
                                            Acted for several financial institutions in transactions involving
                                            perfection of
                                            securities, debt collection and defending the clients against suits on
                                            several
                                            allegations.
                                        </p></li>
                                        <li><p className="lead">
                                            Instructed by one of the leading civil aviation authorities in Africa to
                                            defend it
                                            against a suit filed at the Industrial Court by the Aviation and Allied
                                            Workers
                                            union seeking to stop the client from implementing a proposal to revamp its
                                            housing
                                            scheme.
                                        </p></li>
                                        <li><p className="lead">
                                            Defended several insurance companies in Kenya against various personal and
                                            material
                                            damage claims.
                                        </p></li>
                                        <li><p className="lead">
                                            Instructed to defend the Registrar of Trade Marks in one of the African
                                            Countries
                                            and defend the office in judicial review proceedings alleging procedural
                                            impropriety
                                            relating to one of the leading MARKS in the world.
                                        </p></li>
                                        <li><p className="lead">
                                            Defending one of the most accomplished bureau of standards in the region in
                                            a claim
                                            for breach of contract relating to pre export verification of conformity
                                            standards
                                            (PVOC Programe) involving hundreds of millions of Kenya Shillings.
                                        </p></li>
                                        <li><p className="lead">
                                            Prepared and registered several legal entities for business purposes
                                            including
                                            limited liability companies, business names, partnerships and sole
                                            proprietorships
                                            on behalf of both local and international clients.
                                        </p></li>
                                        <li><p className="lead">
                                            Instructed by a Juba (South Sudan) based ground handling company to recover
                                            millions
                                            of shillings from one of the domestic airlines operation in Kenya.
                                        </p></li>
                                        <li><p className="lead">
                                            Conducting arbitration proceedings for one of the leading export processing
                                            zones in
                                            the region relating to a dispute on construction of an incinerator.
                                        </p></li>
                                        <li><p className="lead">
                                            Representing successfully one of the biggest referral hospitals in African
                                            in a suit
                                            filed by one of its suppliers for breach of a contract for the supply of
                                            cleaning
                                            detergents.
                                        </p></li>
                                        <li><p className="lead">
                                            Acting for one of the biggest regional bodies operating in the Lake Victoria
                                            basin
                                            in negotiating a joint venture agreement with a company from the United
                                            States of
                                            America aimed at constructing a multi million project entailing residential
                                            houses,
                                            business premises and conference hall.
                                        </p></li>
                                        <li><p className="lead">
                                            Represented one of the largest public universities in Kenya and won a case
                                            at the
                                            Supreme Court of Kenya.
                                        </p></li>
                                        <li><p className="lead">
                                            Acted for one of the largest water and harvesting authorities in the region
                                            in
                                            several multi million arbitrations.
                                        </p></li>
                                    </ol>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <CardsFooter/>
            </>
        );
    }
}

export default CasesHandled;
