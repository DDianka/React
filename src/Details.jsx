import React from "react";
import {useParams} from "react-router-dom";


export default function UserDetails(props) {
    const {index} =  useParams();
        return(
        <div>
            <h1> User Details </h1>
            <div>
               Фамилия: {props.users[index].userSurname} <br />
                Имя: {props.users[index].userName} <br />
                Отчество: {props.users[index].userPatronymic}
            </div>
        </div>
        )
}