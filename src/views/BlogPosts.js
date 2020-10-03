/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Third list of posts.
      PostsListThree: [
        {
          author: "Mehant Kammakomati",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "My Google code-in Grand Prize Trip experience",
          body:
            "Hello everyone, I’m very excited to share my wonderful experience at the Google Code-In Grand Prize Winner’s trip (Trip A) which happened in San Francisco, California. I know it’s a delayed post from my side, but it’s totally worth the wait guys! Without wasting any moment, let me get started :)...",
          date: "29 February 2019",
          url: "https://medium.com/@kmehant/my-google-code-in-grand-prize-trip-experience-9dfce42909e5"
        },
        {
          author: "Mehant Kammakomati",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "All about Kute, an amazing project under SCoRe",
          body:
            "Kute is a real-time travel tracker for Sri Lanka users, who are looking out for carpooling and track public transport. It's a convenient application to use for real-time carpooling and track public transport for accurate timings...",
          date: "29 February 2019",
          url: "https://medium.com/@kmehant/all-about-kute-an-amazing-project-under-score-2891ab23a4d5"
        },
        {
          author: "Satish Manohar Talim",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Charles Nutter’s thoughts on Free and Open Source Software (FOSS)",
          body:
            "I recently met Charles Nutter after a very long time at the recently concluded 10th edition of RubyConfIndia 2019 in Goa. Charles is a pleasure to work with. He’s got a great attitude, and is fantastic at keeping everyone around him motivated, productive and on board with the important objectives. Charles, hacks stuff on the JVM. Specialties: JRuby, languages, compilers, optimization.",
          date: "29 February 2019",
          url: "https://medium.com/@IndianGuru/charles-nutters-thoughts-on-free-and-open-source-software-foss-f141f3f4e2b1"
        },
        {
          author: "Lup Yuen",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "My First Week As Embedded FOSS Advocate",
          body:
            "Lunar New Year has always been a depressing period for me in Singapore… The old eccentric uncle who is strangely single… And has nothing in common with the rest of the family.",
          date: "29 February 2019",
          url: "https://medium.com/@ly.lee/my-first-week-as-embedded-foss-advocate-106d625deae"
        },
        {
          author: "Mehant Kammakomati",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Google Summer of Code: Week 0",
          body:
            "I am excited about this Summer to work on some challenging and fun problems which I will be working as part of Google Summer of Code with SCoRe Lab ❤️. This document throws light on my project on Bassa and week 0 updates.",
          date: "29 February 2019",
          url: "https://medium.com/scorelab/google-summer-of-code-week-0-3ffb5f6c2285"
        },
        {
          author: "Mehant Kammakomati",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Google Summer of Code with SCoRe Lab | First Evaluation Summary",
          body:
            "I would share a brief overview of what I have done till my first evaluation of GSoC 2020 with Sustainable Computing Research Lab. I have worked for about 9 complete weeks until I reached my first evaluation. It was a learning and challenges packed journey so far with SCoRe and my Mentor Bhathiya Perera and Administrators Milindu S. Kumarage and Charitha Madusankha.",
          date: "29 February 2019",
          url: "https://medium.com/scorelab/google-summer-of-code-with-score-lab-first-evaluation-summary-193d89c89fee"
        },
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
          <PageTitle sm="4" title="Blog Posts" subtitle="Read and get inspired" className="text-sm-left" />
        </Row>
        {/* we will link google form here */}
        <p>Wish to add a blog to help FOSS community? <a href="https://www.google.com">Reach here</a></p>

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
                  <div className="card-post__author d-flex">

                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {post.author}
                      </span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <a href={post.url} > <i className="fas fa-info mr-1" />Read More</a>
                   
         
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

export default BlogPosts;
