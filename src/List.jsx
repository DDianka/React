import React from "react";


export default class ListPage extends React.Component {
    render() {
        console.log(this.props.users)
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
                                return <tr>
                                    <td>{users.userSurname}</td>
                                    <td>{users.userName}</td>
                                    <td>{users.userPatronymic}</td>
                                    <td onClick={this.props.onRemoveBtn} className="remover">[x]</td>
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
