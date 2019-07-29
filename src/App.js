import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link, Redirect,
} from 'react-router-dom';
import WorkZonePage from './pages/WorkZonePage';
import TodoListPage from './pages/TodoListPage';
import StatisticsPage from './pages/StatisticsPage';
import './App.css';

export default () => (
  <div className="App">
    <Router>
      <header className="App-header">
        <Link to="/">Work Zone</Link>
        <Link to="/todolist">To Do List</Link>
        <Link to="/statistics">Statistics</Link>
      </header>
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
