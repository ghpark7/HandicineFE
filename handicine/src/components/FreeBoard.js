import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function FreeBoard() {
  // 샘플 데이터
  const posts = [
    { id: 1, title: '이 약 정말 좋네요!', content: '사용해봤는데 효과가 아주 좋았어요.' },
    { id: 2, title: '부작용이 있을까요?', content: '어떤 약을 먹었는데 속이 조금 아프네요.' },
  ];

  return (
    <Card>
      <Card.Header as="h5">Free Board</Card.Header>
      <ListGroup variant="flush">
        {posts.map((post) => (
          <ListGroup.Item key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.content}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default FreeBoard;