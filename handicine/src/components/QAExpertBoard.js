import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function QAExpertBoard() {
  const history = useHistory();

  // 샘플 데이터
  const questions = [
    { id: 1, question: '이 약을 복용해도 될까요?', answer: '네, 복용 가능합니다.' },
    { id: 2, question: '복용 시간은 언제가 좋을까요?', answer: '식후 30분이 적합합니다.' },
    { id: 3, question: '어린이도 복용할 수 있나요?', answer: '복용할 수 있습니다.' },
    // 더 많은 샘플 데이터...
  ];

  // 최근 10개 게시물만 표시
  const recentQuestions = questions.slice(0, 10);

  return (
    <Card>
      <Card.Header as="h5">Q&A Board</Card.Header>
      <ListGroup variant="flush">
        {recentQuestions.map((item) => (
          <ListGroup.Item key={item.id}>
            <strong>{item.question}</strong>
            <p>{item.answer}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Footer className="text-center">
        <Button variant="link" onClick={() => history.push('/qa-board')}>
          +더보기
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default QAExpertBoard;