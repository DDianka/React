import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {UserForm} from "./UserForm.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./Home";
import ListPage from "./List"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        user: {
          userSurname: "",
          userName: "",
          userPatronymic: "",
          users: []
            }
        }
    };
    onChangeHandler = (event, user) => {
       console.log(event, user);
       // добавить данные в state
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

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/list">
                    <ListPage/>
                  </Route>
                  <Route path="/home">
                    <HomePage/>
                  </Route>
                </Switch>
              </div>
            </Router>
        /*<div className="container">
          <UserForm user={this.state.user} motherFucker={this.onChangeHandler}/>
          {
            this.state.users && this.state.users.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>Фамилия</th>
                   <th>Имя</th>
                    <th>Отчество</th>
                    <th>Удалить</th>
                  </tr>
                </thead>
                <tbody>
                {
                        this.state.users.map((user, index) => {
                      return <tr>
                        <td>{user.userSurname}</td>
                        <td>{user.userName}</td>
                        <td>{user.userPatronymic}</td>
                        <td onClick = {() => this.onRemoveBtn(index)} className="remover">[x]</td>
                      </tr>
                        })
                }
                    </tbody>
                </table>
                )
              }
        </div>*/
    )
    };
};

export default App;