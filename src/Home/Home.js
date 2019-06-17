import React, { Component } from 'react';
import { makeRoutes } from './../Routes';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './../components/layouts/MainLayout';


class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <Container>
            <BrowserRouter>
              <MainLayout>
                <Row>
                 { makeRoutes()}
                </Row>
              </MainLayout>
            </BrowserRouter>
          </Container>
          
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please Log In to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
