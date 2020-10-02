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

class Communities extends React.Component {

  constructor(props) {
    super(props);

    this.state = {


      PostsListThree: [
        {
          author: "Girls Who Code",
          authorAvatar: require("../images/community_logos/index.png"),
          title: "WE'RE BUILDING THE WORLD'S LARGEST PIPELINE OF FUTURE FEMALE ENGINEERS.",
          body:
            "Girls Who Code programs work to inspire, educate, and equip girls with the computing skills to pursue 21st century opportunities. It is the most widely known community in the World for female gender developers, and helps hundreds of thousands of women to get into the education sector of computer science. The goal is to provide computer science education to more than 1 million young women by the end of year 2020.",
          date: "29 September 2020",
          url: "https://girlswhocode.com/"
        },
        {
          author: "Django Girls",
          authorAvatar: require("../images/community_logos/dgirls.png"),
          title: "We inspire women to fall in love with programming.",
          body:
            "Django Girls is a non-profit organization and a community that empowers and helps women to organize free, one-day programming workshops by providing tools, resources and support. We are a volunteer run organization with hundreds of people contributing to bring more amazing women into the world of technology. We are making technology more approachable by creating resources designed with empathy.",
            date: "29 September 2020",
            url: "https://djangogirls.org/"

          },
        {
          author: "Rails Girls",
          authorAvatar: require("../images/community_logos/rgirls.png"),
          title:
            "Rails Girls - Get started with tech",
          body:
            "Our aim is to give tools and a community for women to understand technology and to build their ideas. We do this by providing a great experience on building things and by making technology more approachable.",
            date: "29 September 2020",
            url: "http://railsgirls.com/"

        },
        {
          author: "Women Who Code",
          authorAvatar: require("../images/community_logos/wgirls.jpeg"),
          title:
            "Empowering Women in Technology",
          body:
            "We are committed to ensuring that Women Who Code is an anti-racist organization and recognize the power of our platform to be a force that affects change. Until we all experience justice and equity in our daily lives, none of us can.",
            date: "29 September 2020",
            url: "https://www.womenwhocode.com/"
        },
        
        {
          author: "Lesbians Who Tech",
          authorAvatar: require("../images/community_logos/lgbt1.jpeg"),
          title:
            "Community of Queer Women in or around tech (and the people who love them)",
          body:
            "The organization’s goal is to create visibility, industry inclusion, and community for these women. Lesbians Who Tech has an impressive 40,000 members and over 42 chapters worldwide. The group holds summits in various cities and hosts notable speakers, including Sheryl Sandberg who spoke in San Francisco this past March. Also worth noting: The group provides a coding scholarship and organizes Bring a Lesbian to Work Day.",
            date: "29 September 2020",
            url: "https://lesbianswhotech.org/"
      },        
        {
          author: "LGBTQ in Technology",
          authorAvatar: require("../images/community_logos/lgbt2.jpeg"),
          title:
            "The LGBTQ in Technology Slack is a space for LGBTQ people in technology to chat and support each other.",
          body:
            "Anybody who identifies as lesbian, gay, bisexual, trans, queer, and those questioning whether they fit into those or any of the many other sub-genres of people who are not generally considered both “straight” and cis. Friends and allies: we appreciate your support, but this space is for us.",
            date: "29 September 2020",
            url: "https://lgbtq.technology/"
        },
        {
          author: "Black Girls Code",
          authorAvatar: require("../images/community_logos/black3.png"),
          title:
            "Black Men Code is a fiscally sponsored, non-profit, social benefit organization.",
          body:
            "To increase the number of women of color in the digital space by empowering girls of color ages 7 to 17 to become innovators in STEM fields, leaders in their communities, and builders of their own futures through exposure to computer science and technology. To provide African-American youth with the skills to occupy some of the 1.4 million computing job openings expected to be available in the U.S. by 2020, and to train 1 million girls by 2040.",
            date: "29 September 2020",
            url: "https://www.blackgirlscode.com/"
        },
        
        {
          author: "Coding Black Females",
          authorAvatar: require("../images/community_logos/black2.jpeg"),
          title:
            "Building, Supporting and Educating the community of Coding Black Females.",
          body:
            "Coding Black Females was created in 2017. We are a nonprofit organisation, and our primary aim is to provide opportunities for Black female developers to develop themselves, meet familiar faces, network, receive support and build relationships through having regular meetups.",
            date: "29 September 2020",
            url: "https://codingblackfemales.com/"
      },        
        {
          author: "Out in tech",
          authorAvatar: require("../images/community_logos/lgbt3.png"),
          title:
            "Built a community of 20,000 LGBTQ+ tech professionals",
          body:
            "Out in Tech is a nonprofit that has built a community of 20,000 LGBTQ+ tech professionals. Like many other organizations, Out in Tech holds networking events and showcases accomplished speakers to empower the LGBTQ+ community. What sets Out in Tech apart is its commitment to mentoring young LGBTQ+ people who aspire to work in tech. It also organizes a volunteer program to provide web services for LGBTQ+ activists worldwide.",
            date: "29 September 2020",
            url: "https://outintech.com/"
        },
        {
          author: "Girls Who Code",
          authorAvatar: require("../images/community_logos/index.png"),
          title: "WE'RE BUILDING THE WORLD'S LARGEST PIPELINE OF FUTURE FEMALE ENGINEERS.",
          body:
            "Girls Who Code programs work to inspire, educate, and equip girls with the computing skills to pursue 21st century opportunities. It is the most widely known community in the World for female gender developers, and helps hundreds of thousands of women to get into the education sector of computer science. The goal is to provide computer science education to more than 1 million young women by the end of year 2020.",
          date: "29 September 2020",
          url: "https://girlswhocode.com/"
        },
        {
          author: "Django Girls",
          authorAvatar: require("../images/community_logos/dgirls.png"),
          title: "We inspire women to fall in love with programming.",
          body:
            "Django Girls is a non-profit organization and a community that empowers and helps women to organize free, one-day programming workshops by providing tools, resources and support. We are a volunteer run organization with hundreds of people contributing to bring more amazing women into the world of technology. We are making technology more approachable by creating resources designed with empathy.",
            date: "29 September 2020",
            url: "https://djangogirls.org/"

          },
        {
          author: "Rails Girls",
          authorAvatar: require("../images/community_logos/rgirls.png"),
          title:
            "Rails Girls - Get started with tech",
          body:
            "Our aim is to give tools and a community for women to understand technology and to build their ideas. We do this by providing a great experience on building things and by making technology more approachable.",
            date: "29 September 2020",
            url: "http://railsgirls.com/"

        }
      ]

    };
  }
  openURL = (url) => {
    window.open(url);

  }
  render() {
    const {
      PostsListThree
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Communities" subtitle="Join and excel" className="text-sm-left" />
        </Row>
        <p>Wish to add a community or club? <a href="https://www.google.com">Fill it here!</a></p>
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
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {post.author}
                      </span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <a href={post.url} > <i className="fas fa-info mr-1" /> Learn More</a>
                   
         
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

export default Communities;
