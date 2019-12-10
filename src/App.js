import React from 'react';
// import logo from './logo.svg';
import './App.css';

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
          userName: this.state.users.userName,
          userPatronymic: this.state.users.userPatronymic
        })
      })
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
    <div className="container">
      <div>
        <label htmlFor="inpSurname">Фамилия</label>
        <input type="text" value={this.state.userSurname} onChange={this.onSurnameChange} id="inpSurname" className="field"/>
      </div>
      <div>
        <label htmlFor="inpName">Имя</label>
        <input type="text" value={this.state.userName} onChange={this.onNameChange} className="field"></input>
      </div>
      <div>
        <label htmlFor="inpPatronymic">Отчество</label>
        <input type="text" value={this.state.userPatronymic} onChange={this.onPatronymicChange} className="field"></input>
      </div>
      <button onClick={this.onSubmit} id="btn"> SUBMIT </button>
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
            <td onCLick = {() => this.onRemoveBtn(index)} className="remover">[x]</td>
          </tr>
            })
          }
        </tbody>
      </table>
    </div>
    )
    };
};

export default App;
