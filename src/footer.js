import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { AiOutlineStar } from "react-icons/ai";

export default function AppFooter(params) {
  return (
    <Row>
      <Col className="app-footer">
        <p>
          Love This App?&nbsp;
          <Card.Link
            href="https://github.com/sanketgupta07/codeboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            {">"} Give my repo a star
            <AiOutlineStar />
          </Card.Link>
        </p>
      </Col>
    </Row>
  );
}
