import React from "react";
import apiService from "./APIservice";


export default class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.user = apiService.getUserById(this.props.match.params.index)
        console.log(this.user);
         console.log(this.props.match.params)
    }
  //  user = {};
    //componentDidMount() {
    //    console.log(this.props.match.params);
   //     this.user = apiService.getUserById(this.props.match.params.id)
   // }
    render () {
    // const {user} = this;
        return(
            <div>
                <h1> User Details </h1>
                <div>
                   Фамилия: {this.user.userSurname}  <br />
                    Имя: {this.user.userName} <br />
                    Отчество: {this.user.userPatronymic}
                </div>
            </div>
        )
    }
}
