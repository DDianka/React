import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./Home";
import ListPage from "./List" ;
import UserDetails from "./Details";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userSurname: "",
          userName: "",
          userPatronymic: "",
          users: []
        }
    };
    onTableClick = (event) => {
        this.setState({
            users: event.target.value
        })
    };
    onSurnameChange = (event) => {
      this.setState({
        userSurname: event.target.value
      });
    };
    onNameChange = (event) => {
      this.setState({
        userName: event.target.value
      });
    };
    onPatronymicChange = (event) => {
      this.setState({
        userPatronymic: event.target.value
      });
    };
    isValid = (userSurname, userName, userPatronymic) => {
      return userSurname && userName && userPatronymic
    };
    onSubmit = () => {
      if (this.isValid(this.state.userSurname, this.state.userName, this.state.userPatronymic)) {
      this.setState({
        users: this.state.users.concat({
          userSurname: this.state.userSurname,
          userName: this.state.userName,
          userPatronymic: this.state.userPatronymic
        })
      })
    } else {
      alert("Заполните пустое поле")
    }
    };
    onRemoveBtn = (indexToRemove) => {
        this.setState({
        users: this.state.users.filter(function (item, index) {
          return indexToRemove !== index
        })
      });
    };
    render() {
    return (
         <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/list">List</Link>
                    </li>
                  </ul>
                </nav>
                <Switch>
                  <Route path="/list">
                    <ListPage users={this.state.users}
                              onRemove={this.onRemoveBtn}
                    />
                  </Route>
                  <Route path="/home">
                    <HomePage userName={this.state.userName}
                              userSurname={this.state.userSurname}
                              userPatronimyc={this.state.userPatronymic}
                              users={this.state.users}
                              onNameChange={this.onNameChange}
                              onSurnameChange={this.onSurnameChange}
                              onPatronymicChange={this.onPatronymicChange}
                              onSubmit={this.onSubmit}
                              onRemove={this.onRemoveBtn}
                    />
                  </Route>
                    <Route path="/details/:index" children={<UserDetails users={this.state.users} />} />
                </Switch>
              </div>

            </Router>
        )
    };
};

export default App;