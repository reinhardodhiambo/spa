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

class TurnaroundTime extends React.Component {
  render() {
    return (
      <>
        <section
          className="section section-components pb-0 bg-secondary"
          id="turnaround_time"
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                {/* Basic elements */}
                <h2 className="text-uppercase  font-weight-bold">
                  <span>Turnaround Time</span>
                </h2>
                <p className="lead">
                  As a firm serving mainly the business community, Simiyu and Partners LLP Advocates strongly believes that time is an important resource and hence always endeavour to discharge given responsibilities efficiently and with utmost speed in order to add value to clients’ businesses. The firm is fully computerized and networked.
                </p>
                <p className="lead">
                  As indicated herein above, the firm has access to well stocked libraries thus making it possible to speed up all manner and volume of work handled at any given point in time.
                </p>
                <p className="lead">
                  As a matter of policy, the firm responds to all correspondence within twenty-four (24) hours of receipt thereof. Perfection of securities is done immediately all the completion documents are availed. The firm endeavours to conclude all manner of litigation within two (2) years and ordinary debt collection would take us between six (6) months and one (l) year, if the matters go to court.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default TurnaroundTime;
