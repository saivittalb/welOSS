/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class Newsletter extends React.Component {
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
          <PageTitle sm="4" title="Newsletter" subtitle="Check us out" className="text-sm-left" />
        </Row>
        {/* we will link google form here */}
        <p>Sign up for our newsletter to learn more and also preview the behind the scenes of communities.</p>
        <div className="mb-0">
            <Button theme="accent" type="submit">
              Sign up
            </Button>
        </div>

     </Container>
    );
  }
}

export default Newsletter;
