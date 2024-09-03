import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';
import ImageSearchButton from './ImageSearchButton';
import QAExpertBoard from './QAExpertBoard';
import FreeBoard from './FreeBoard';

function MainPage() {
  return (
    <>
      <Row className="my-4">
        <Col>
          <SearchBar />
        </Col>
        <Col xs="auto">
          <ImageSearchButton />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <QAExpertBoard />
        </Col>
        <Col md={6}>
          <FreeBoard />
        </Col>
      </Row>
    </>
  );
}

export default MainPage;