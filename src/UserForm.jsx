import React from "react";
import onChangeHandler from "./App"


export class UserForm extends React.Component {
    constructor(props) {
        super(props)
    }
    onChangeHandler = (event, user) => {
        this.props.motherFucker(event.target.value, user)
    };
    render() {
        return (
             <div className="container">
                  <div>
                    <div>
                      <label htmlFor="inpSurname">Фамилия</label>
                      <input type="text" value={this.props.user.userSurname} onChange={(event) => this.onChangeHandler(event, "userSurname")}/*onSubmitUser={this.props.onSubmitUser = ()} */ id="inpSurname" className="field"/>
                  </div>
                  <div>
                      <label htmlFor="inpName">Имя</label>
                      <input type="text" value={this.props.user.userName} onChange={(event) => this.onChangeHandler(event, "userName")}/* onChange={this.onNameChange} */ className="field"></input>
                  </div>
                  <div>
                      <label htmlFor="inpPatronymic">Отчество</label>
                      <input type="text" value={this.props.user.userPatronymic} onChange={(event) => this.onChangeHandler(event, "userPatronymic")}/* onChange={this.onPatronymicChange} */ className="field"></input>
                  </div>
                  <button /*onClick={this.onSubmit} */ id="btn"> submit </button>
               </div>
             </div>
        )
    }
}