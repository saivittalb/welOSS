import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Learn = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Learn" subtitle="Search term: 'Java'" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Basic</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Name
                  </th>
                  <th scope="col" className="border-0">
                    Type
                  </th>
                  <th scope="col" className="border-0">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Java Tutorial - Tutorials Point</td>
                  <td>Webpage with live compiler</td>
                  <td><a href="https://www.tutorialspoint.com/java/index.htm">Available here</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Java Tutorial - W3 Schools</td>
                  <td>Webpage with live compiler</td>
                  <td><a href="https://www.w3schools.com/java/">Available here</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Learn Java 8 - Full Tutorial for Beginners - freeCodeCamp.org</td>
                  <td>YouTube video</td>
                  <td><a href="https://youtu.be/grEKMHGYyns">Available here</a></td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Intermediate</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Name
                  </th>
                  <th scope="col" className="border-0">
                    Type
                  </th>
                  <th scope="col" className="border-0">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Parallel, Concurrent, and Distributed Programming in Java - Rice University</td>
                  <td>Coursera video</td>
                  <td><a href="https://www.coursera.org/specializations/pcdp">Available here</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Object Oriented Programming in Java - UC San Diego</td>
                  <td>Coursera video</td>
                  <td><a href="https://www.coursera.org/learn/object-oriented-java">Available here</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Java Programming Fundamentals - GalileoX</td>
                  <td>edX Video</td>
                  <td><a href="https://www.edx.org/course/java-programming-fundamentals">Available here</a></td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Advanced</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Name
                  </th>
                  <th scope="col" className="border-0">
                    Type
                  </th>
                  <th scope="col" className="border-0">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Advanced Java Programming - Infinite Skills</td>
                  <td>Udemy video</td>
                  <td><a href="https://www.udemy.com/course/advanced-java-programming/">Available here</a></td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Learn;
