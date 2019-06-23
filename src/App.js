import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import { brand } from './components/screens/brands';
import { carsByBrand } from './components/screens/carsByBrand';
import { SelectCar } from './components/screens/selectCar';

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
                  <Switch>
                    <Route exact path="/" component={brand} />
                    <Route exact path="/:brand" component={carsByBrand} />
                    <Route path="/:brand/:carsByBrand" render={(props) => <SelectCar auth={this.props.auth} {...props} />} />
                  </Switch>
                </Row>
              </MainLayout>
            </BrowserRouter>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
