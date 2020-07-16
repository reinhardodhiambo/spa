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

class MissionStatement extends React.Component {
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
                  <span>Mission Statement</span>
                </h2>
                <p className="lead">
                  Simiyu and Partners Advocates’ LLP mission is to render as well as deliver professional legal services of the highest standards with the utmost speed and to secure positive results at competitive costs to its clients.
                </p>
                <p className="lead">
                  The firm is dedicated, distinguished and prides itself to being of medium size with selected niches. This has enabled the firm to retain and sharpen its focus, vision, speed and delivery in various areas of specialized legal practice.
                </p>
                <p className="lead">
                  This firm strives for quality and excellence anchored on professional ethics, personalized service, confidentiality and adding value to clients through commitment, dedication, integrity and transparency.
                </p>
                <p className="lead">
                  There is sufficient capacity by the firm to offer legal services within Kenya and the East African Community. In addition, we have linkages to other law firms in different parts of Africa and the world through which our clients can get the requisite assistance as far as legal service provision is concerned.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default MissionStatement;
