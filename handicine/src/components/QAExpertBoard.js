import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

function QAExpertBoard() {
  // 샘플 데이터
  const questions = [
    { id: 1, question: '이 약을 복용해도 될까요?', answer: '네, 복용 가능합니다.' },
    { id: 2, question: '복용 시간은 언제가 좋을까요?', answer: '식후 30분이 적합합니다.' },
  ];

  return (
    <Card>
      <Card.Header as="h5">Q&A Board</Card.Header>
      <ListGroup variant="flush">
        {questions.map((item) => (
          <ListGroup.Item key={item.id}>
            <strong>{item.question}</strong>
            <p>{item.answer}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Footer>
        <Button variant="primary">글 작성하기</Button>
      </Card.Footer>
    </Card>
  );
}

export default QAExpertBoard;