import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <MainPage />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
