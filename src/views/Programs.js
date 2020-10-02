/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class Programs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      PostsListFour: [
        {
          backgroundImage: require("../images/program_logos/gsoc.png"),
          url: "https://summerofcode.withgoogle.com/",
          title: "Google Summer of Code",
          body:
            "Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work on a three month programming project with an open source organization during their break from university.",
          time: "December - September"

        },
        {
          backgroundImage: require("../images/program_logos/gsod.png"),
          url: "https://developers.google.com/season-of-docs/",
          title: "Google Season of Docs",
          body:
            "Let's bring open source and technical writer communities together, to the benefit of both. Together we raise awareness of open source, of docs, and of technical writing.",
          time: "March - January"

        },
        {
          backgroundImage: require("../images/program_logos/kde.png"),
          url: "https://season.kde.org/?q=program_home&prg=47",
          title: "Season of KDE",
          body:
            "Season of KDE is an outreach program hosted by the KDE community.",
          time: "December - February"

        },
        {
          backgroundImage: require("../images/program_logos/outreachy.png"),
          url: "https://www.outreachy.org/",
          title: "Outreachy Internship",
          body:
            "Outreachy provides remote internships. Outreachy supports diversity in open source and free software! Outreachy internships are 3 months long. Interns are paid an internship stipend of $5,500 USD. Interns have a $500 USD travel stipend to attend conferences or events. Interns work with experienced mentors from open source communities. Outreachy internship projects may include programming, user experience, documentation, illustration, graphical design,  data science, project marketing, user advocacy, or community event planning.",
          time: "December - March"

        },
        {
          backgroundImage: require("../images/program_logos/gnome.png"),
          url: "https://wiki.gnome.org/Internships",
          title: "GNOME Internship Program",
          body:
            "GNOME internships provide a three-month internships for any person eligible by the eligibility rules. Interns are paid a stipend of $8000 per internship.",
          time: "December - March"

        },
        {
          backgroundImage: require("../images/program_logos/gsee.png"),
          url: "https://sites.google.com/view/summerofearthengine/home",
          title: "Google Summer of Earth Engine",
          body:
            "Google Summer of Earth Engine is a research program for Indian university students & researchers to get a chance to work with leading research organizations in the country working in environment, conservation, water resources and agricultural domains over 3 months of summer on a project and get paid to do so!",
          time: "May - July"

        },
        {
          backgroundImage: require("../images/program_logos/osoc.png"),
          url: "https://summerofcode.be/",
          title: "Open Summer of Code",
          body:
            "A 4-week summer programme in July, that provides Belgian based students the training, network and support necessary to transform open innovation projects into powerful real-world services.",
          time: "May - July"

        },
        {
          backgroundImage: require("../images/program_logos/fossasia.png"),
          url: "https://fossasia.org/internship",
          title: "FOSSASIA Internship Programme",
          body:
            "Are you interested to participate in the development of Open Source projects in a summer internship? Build up your developer profile with FOSSASIA and spend your summer coding on an open source project.  Contribute to SUSI.AI, Open Event, Badgeyay, Yaydoc, Meilix or PSLab and join us at a workshop week and Jugaadfest in India. Please find the details below and submit your application to our form. Be sure to check out FOSSASIA’s program guidelines.",
          time: "May - July"

        },
      ]
    };
  }

  render() {
    const {
      PostsListFour
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Programs and Opportunities" subtitle="Involve and develop career with FOSS" className="text-sm-left" />
        </Row>
       {/* we will link google form here */}
       <p>Wish to add an OSS Program? <a href="https://www.google.com">Reach here</a></p>

        {/* Fourth Row of posts */}
        <Row>
          {PostsListFour.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post h-100">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                />
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text">{post.body}</p>
                  <p>{post.time}</p>
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

export default Programs;
