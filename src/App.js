import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link, Redirect,
} from 'react-router-dom';
import WorkZonePage from './pages/WorkZonePage';
import TodoListPage from './pages/TodoListPage';
import StatisticsPage from './pages/StatisticsPage';
import Header from './components/Header';
import './App.css';

export default () => (
  <div className="App">
    <Router>
      <Header>
        <Link to="/">Work Zone</Link>
        <Link to="/todolist">To Do List</Link>
        <Link to="/statistics">Statistics</Link>
      </Header>
      <main>
        <Switch>
          <Route path="/" exact component={WorkZonePage} />
          <Route path="/todolist" component={TodoListPage} />
          <Route path="/statistics" component={StatisticsPage} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  </div>
);
