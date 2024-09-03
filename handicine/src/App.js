import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import QAExpertBoardPage from './components/QAExpertBoardPage';
import FreeBoardPage from './components/FreeBoardPage';

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/qa-board" element={<QAExpertBoardPage />} />
          <Route path="/free-board" element={<FreeBoardPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;