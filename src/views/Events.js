import React from "react";
import { Container, Row, Col, Card, CardFooter, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";



class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      MeetsOne: [
        {
          url: "https://events.gnome.org/",
          title: "GNOME Events",
          body:
            "The GNOME Foundation is a non-profit organization based in Orinda, California, United States, coordinating the efforts in the GNOME project. It hosts some exciting events such as GNOME.Asia and so on.",
        },
        {
          url: "https://www.redhat.com/en/events",
          title: "Red Hat Events",
          body:
            "Red Hat conducts various events on container technologies, Orchestration tools and all around Open Source Software",
        },
        {
          url: "https://opensource.org/events",
          title: "Open Source Initiative Events",
          body:
            "The OSI and the OSI Board of Directors are involved in a variety of events around the globe. You can see upcoming (and past) events where the OSI will or has participated as well as events and activities of the OSI Affiliate Membership and our Sponsors.",
        },
        {
          url: "https://events.linuxfoundation.org/",
          title: "Linux Foundation Events",
          body:
            "Over 45,000 of the world’s leading technologists and open source leaders will gather at Linux Foundation events in 2020 to share ideas, learn and collaborate.",
        },
      ],

    
    };
  }

  render() {
    const {
      MeetsOne
    } = this.state;

    return (
      
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Open Source Events" subtitle="Tuesday, 27th October, 7:10 PM, 2020" className="text-sm-left" />
        </Row>
       {/* we will link google form here */}
       <p>Wish to add an OSS Meet or an online event? <a href="/">Reach here</a></p>

        {/* Fourth Row of posts */}
        <Row>
          {MeetsOne.map((post, idx) => (
            <Col lg="10" md="10" sm="20" className="mb-4" key={idx}>
              <Card small className="card-post h-10">
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="/">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text">{post.body}</p>
                </CardBody>
                <CardFooter className="text-muted border-top py-3">
                  <a href={post.url}>Learn More</a> 
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>

      
    );
  }
}

export default Events;