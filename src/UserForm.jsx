import React from "react";

export default class UserForm extends React.Component {
    render() {
        return (
             <div className="container">
                  <div>
                    <div>
                      <label htmlFor="inpSurname">Фамилия</label>
                      <input type="text"
                             value={this.props.userSurname}
                             onChange={this.props.onSurnameChange}
                             id="inpSurname" className="field"/>
                  </div>
                  <div>
                      <label htmlFor="inpName">Имя</label>
                      <input type="text"
                             value={this.props.userName}
                             onChange={this.props.onNameChange}
                             className="field" />
                  </div>
                  <div>
                      <label htmlFor="inpPatronymic">Отчество</label>
                      <input type="text"
                             value={this.props.userPatronymic}
                             onChange={this.props.onPatronymicChange}
                             className="field" />
                  </div>
                  <button  onClick={this.props.onSubmit}  id="btn"> submit </button>
               </div>
             </div>
        )
    }
}