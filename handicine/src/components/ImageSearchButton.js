import React from 'react';
import { Button } from 'react-bootstrap';

function ImageSearchButton() {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // 이미지 처리 로직 추가
      console.log(file);
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        id="upload"
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      />
      <Button
        variant="primary"
        style={{ minWidth: '120px', textAlign: 'center' }}
        onClick={() => document.getElementById('upload').click()}
      >
        이미지로 검색
      </Button>
    </>
  );
}

export default ImageSearchButton;