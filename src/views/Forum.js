/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class Forum extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Third list of posts.
      PostsListThree: [
        {
          title: "welOSS Discord Server",
          body: "Official Discord Server of welOSS",
          active_date: "29 February 2019",
          url: "https://discord.com"
        }
      ],

    };
  }

  render() {
    const {
      PostsListThree
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Forum" subtitle="Connect and get support" className="text-sm-left" />
        </Row>
        {/* we will link google form here */}
        <p>We've multiple available support options. Join our Discord server, or mail us directly.</p>

        {/* Third Row of Posts */}
        <Row>
          {PostsListThree.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.body}</p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="d-flex flex-column justify-content-center ml-3">
                    <small className="text-muted">Active from: {post.active_date}</small>
                  </div>
                  <div className="my-auto ml-auto">
                    <a href={post.url} > <i className="fab fa-discord mr-1" />Join the server</a>
                  </div>
                </CardFooter> 
              </Card>
            </Col>
          ))}
        </Row>

     </Container>
    );
  }
}

export default Forum;
