import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

import { makeRoutes } from './Routes';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    console.log('isAuthenticated', isAuthenticated);


    return (
      <div>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand>
            <a href="/">Car-Info</a>
          </Navbar.Brand>
          {!isAuthenticated() && (
            <Button
              id="qsLoginBtn"
              bsstyle="primary"
              className="btn-margin"
              onClick={this.login.bind(this)}>
              Log In
            </Button>
          )
          }
          {isAuthenticated() && (
            <Button
              id="qsLogoutBtn"
              bsstyle="primary"
              className="btn-margin"
              onClick={this.logout.bind(this)}>
              Log Out
            </Button>
          )
          }
        </Navbar>
      <div className="container m-top">
      <Container>
            <BrowserRouter>
              <MainLayout>
                <Row>
                 { makeRoutes()}
                </Row>
              </MainLayout>
            </BrowserRouter>
          </Container>
      </div>
        {/* <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                <Button
                  id="qsLoginBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.login.bind(this)}
                >
                  Log In
                  </Button>
              )
            }
            {
              isAuthenticated() && (
                <Button
                  id="qsLogoutBtn"
                  bsStyle="primary"
                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                  </Button>
              )
            }
          </Navbar.Header>
        </Navbar> */}


      </div>
    );
  }
}

export default App;
