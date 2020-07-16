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

class FacilitiesEquipments extends React.Component {
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
                  <span>List of Equipment, Tools and or Facilities for offering Services</span>
                </h2>
                <p className="lead">
                  The firm has access to well-stocked and updated libraries, with the latest texts on the changing face of law. This is supplemented by online libraries with access to decisions and precedents from various jurisdictions the world over. This enables the firm to handle emerging areas of law competently.
                </p>
                <p className="lead">
                  The firm has access to well-stocked and updated libraries, with the latest texts on the changing face of law. This is supplemented by online libraries with access to decisions and precedents from various jurisdictions the world over. This enables the firm to handle emerging areas of law competently.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default FacilitiesEquipments;
