import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Routes from "./Routes";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <MainLayout>
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </Container>
  );
}

export default App;
