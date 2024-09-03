import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function FreeBoard() {
  const history = useHistory();

  // 샘플 데이터
  const posts = [
    { id: 1, title: '이 약 정말 좋네요!', content: '사용해봤는데 효과가 아주 좋았어요.' },
    { id: 2, title: '부작용이 있을까요?', content: '어떤 약을 먹었는데 속이 조금 아프네요.' },
    { id: 3, title: '추천하는 약이 있나요?', content: '감기약으로 좋은 거 추천 부탁드립니다.' },
    // 더 많은 샘플 데이터...
  ];

  // 최근 10개 게시물만 표시
  const recentPosts = posts.slice(0, 10);

  return (
    <Card>
      <Card.Header as="h5">Free Board</Card.Header>
      <ListGroup variant="flush">
        {recentPosts.map((post) => (
          <ListGroup.Item key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.content}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Footer className="text-center">
        <Button variant="link" onClick={() => history.push('/free-board')}>
          +더보기
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default FreeBoard;