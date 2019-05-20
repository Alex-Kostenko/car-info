import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Routes from "./Routes";
import {Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <MainLayout>
          <Row>
            <Routes />
          </Row>
        </MainLayout>
      </BrowserRouter>
    </Container>
  );
}

export default App;
