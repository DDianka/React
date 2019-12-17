import React from "react";
import {Link} from "react-router-dom";



export default class ListPage extends React.Component {
    render() {
        return (<div>
            <h1>  List Page </h1>
            <div className="container">
                {
                this.props.users && this.props.users.length > 0 && (
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
                            this.props.users.map((users, index) => {
                                return <tr key={index}>
                                    <td> <Link to={`/details/${index}`}>{users.userSurname}</Link></td>
                                    <td><Link to={`/details/${index}`}>{users.userName}</Link></td>
                                    <td><Link to={`/details/${index}`}>{users.userPatronymic}</Link></td>
                                    <td onClick={() => this.props.onRemove(index)} className="remover">[x]</td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                )
            }
            </div>
        </div>)
    }
}
