import React from "react";
import UserForm from "./UserForm";
import List from "./List";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>  Home Page </h1>
                <UserForm userName={this.props.userName}
                          onNameChange={this.props.onNameChange}
                          onSurnameChange={this.props.onSurnameChange}
                          onPatronymicChange={this.props.onPatronymicChange}
                          onSubmit={this.props.onSubmit}
                />
                <List users={this.props.users}
                      onRemove={this.props.onRemove}
                />
            </div>
        )
    }
}