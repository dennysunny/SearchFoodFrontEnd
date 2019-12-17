import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PrivateRoute from '../helpers/PrivateRoute';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/RegisterPage';
import SearchPage from '../pages/Search';
import CreateStorePage from '../pages/CreateStorePage';
import StorePage from '../pages/Store';

const useStyles = makeStyles(() => ({
  container: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
}));

const Router = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <CssBaseline />
      <Container className={classes.container} maxWidth="xl">
        <Header />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <PrivateRoute path="/storeDetail:storename">
          <StorePage />
        </PrivateRoute>
        <PrivateRoute path="/createStore">
          <CreateStorePage />
        </PrivateRoute>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
