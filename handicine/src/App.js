import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/qa-board" component={QAExpertBoardPage} />
          <Route path="/free-board" component={FreeBoardPage} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;