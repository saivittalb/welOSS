import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
  Row,
  Col,
  FormSelect
} from "shards-react";

const SuggestedRepositories = ({ title, referralData }) => (
  <Card small>
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
      <div className="block-handle" />
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup small flush className="list-group-small">
        {referralData.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3">
            <span className="text-semibold text-fiord-blue">{item.title}</span>
            <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item.value}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        {/* Time Span */}
        <Col>
          <FormSelect
            size="sm"
            value="last-week"
            style={{ maxWidth: "130px" }}
            onChange={() => {}}
          >
            <option value="last-week">Last Week</option>
            <option value="today">Today</option>
            <option value="last-month">Last Month</option>
            <option value="last-year">Last Year</option>
          </FormSelect>
        </Col>

        {/* View Full Report */}
        <Col className="text-right view-report">
          {/* eslint-disable-next-line */}
          <a href="#">Full report &rarr;</a>
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

SuggestedRepositories.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  referralData: PropTypes.array
};

SuggestedRepositories.defaultProps = {
  title: "Suggested Repositories that match your profile",
  referralData: [
    {
      title: "Example Project - 1",
      value: "99.4%"
    },
    {
      title: "Example Project - 2",
      value: "98.2%"
    },
    {
      title: "Example Project - 3",
      value: "94.7%"
    },
    {
      title: "Example Project - 4",
      value: "83.4%"
    },
    {
      title: "Example Project - 5",
      value: "71%"
    },
    {
      title: "Example Project - 6",
      value: "67.7%"
    },
    {
      title: "Example Project - 7",
      value: "65.2%"
    },
    {
      title: "Example Project - 8",
      value: "55%"
    }
  ]
};

export default SuggestedRepositories;
