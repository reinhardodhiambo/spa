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
import { Button, Container, Row, Col } from "reactstrap";

class ProffesionlTraining extends React.Component {
  render() {
    return (
      <>
        <section
          className="section section-components pb-0 bg-secondary"
          id="professional_training"
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                {/* Basic elements */}
                <h2 className="text-uppercase  font-weight-bold">
                  <span>Professional Training</span>
                </h2>
                <p className="lead">
                  The firm has strong traditions of cultivating, nurturing the continuous training of its professionals so that they keep abreast of local and international best practices and standards. All advocates annually and mandatorily undertake niche training in their areas of practice beyond the Law Society of Kenya’s mandatory continuing legal education training required for issue of the annual practicing certificates. The firm’s professionals regularly attend local and international bar conferences where they interact with peers in the legal profession from within this jurisdiction and beyond.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default ProffesionlTraining;
