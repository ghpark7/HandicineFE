import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function SearchBar() {
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="약품 이름을 입력하세요"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success" style={{ minWidth: '80px', textAlign: 'center' }}>
        검색
      </Button>
    </Form>
  );
}

export default SearchBar;