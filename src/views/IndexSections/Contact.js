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
import {Button, Container, Row, Col, UncontrolledCarousel} from "reactstrap";

const items = [
    {
        src: require("assets/img/theme/img-1-1200x1000.jpg"),
        altText: "",
        caption: "",
        header: ""
    },
    {
        src: require("assets/img/theme/img-2-1200x1000.jpg"),
        altText: "",
        caption: "",
        header: ""
    }
];

class Contact extends React.Component {
    render() {
        return (
            <>
                <section className="section section-shaped" id="contact">
                    <div className="shape shape-style-1 shape-default">
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    <Container className="py-md">
                        <Row className="justify-content-between align-items-center">
                            <Col className="mb-5 mb-lg-0" lg="5">
                                <h1 className="text-white font-weight-light">
                                    Address and Location
                                </h1>
                                <p className="lead text-white mt-4">
                                    The firm is located at the following address:
                                </p>

                                <p className="lead text-white mt-4">
                                    Simiyu & Partners Advocates, LLP<br/>
                                    KMA Apartments, Block E1, Ground Floor | Chyulu Road, Upperhill Area, Nairobi, Kenya<br/>
                                    P. O. Box 54996 - 00200<br/>
                                    Nairobi.<br/>
                                    <br/>
                                    Tel: 0722337681/0742158490<br/>
                                    E-mail: info@spadvocates.co.ke<br/>
                                    Website: www.spadvocates.co.ke<br/>
                                </p>
                            </Col>
                            <Col className="mb-lg-auto" lg="6">

                                   <br/>
                                   <br/>
                                   <br/>
                                <br/>
                                <br/>
                                <br/>

                                    <p className="lead text-white mt-4">
                                        We have established a branch in Bungoma County. This office also specifically
                                        serves adjoining counties such as Busia, Vihiga, Kisumu, Kakamega, Uasin Gishu,
                                        Nandi, Trans Nzoia and West Pokot. The branch office address is as follows:
                                    </p>

                                    <p className="lead text-white mt-4">
                                        Simiyu & Partners Advocates LLP<br/>
                                        Beadon House<br/>
                                        1st Floor<br/>
                                        Moi Avenue<br/>
                                        P. O. Box 317<br/>
                                        Bungoma.<br/>
                                        <br/>
                                        Tel: 0710712587/072337681<br/>
                                        E-mail: info@spadvocates.co.ke<br/>
                                    </p>
                            </Col>
                        </Row>
                    </Container>
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
                            <polygon className="fill-white" points="2560 0 2560 100 0 100"/>
                        </svg>
                    </div>
                </section>
            </>
        );
    }
}

export default Contact;
