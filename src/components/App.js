import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import history from './history';
import SignUp from './SingUp/SignUp';
import Login from './Login/Login';
import PostJob from './PostJob/PostJob';
import Profile from './Profile/Profile';
import AuctionItem from './AuctionItem/AuctionItem';
import JobList from './JobList/JobList';
import Freelancers from './Freelancers';
import MessageModal from './MessageModal';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/post-job" exact component={PostJob}></Route>
          <Route path="/profile" exact component={Profile}></Route>
          <Route path="/auction-item" exact component={AuctionItem}></Route>
          <Route path="/job-list" exact component={JobList}></Route>
          <Route path="/freelancers" exact component={Freelancers}></Route>
        </Switch>
        <MessageModal />
      </Router>
    );
  }
}

export default App;
