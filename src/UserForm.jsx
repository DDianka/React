class UserForm extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
             <div className="container">
                  <div>
                    <div>
                      <label htmlFor="inpSurname">Фамилия</label>
                      <input type="text" value={this.props.user} onSubmitUser={this.props.onSubmitUser = ()} id="inpSurname" className="field"/>
                  </div>
                  <div>
                      <label htmlFor="inpName">Имя</label>
                      <input type="text" value={this.props.user} onChange={this.onNameChange} className="field"></input>
                  </div>
                  <div>
                      <label htmlFor="inpPatronymic">Отчество</label>
                      <input type="text" value={this.props.user} onChange={this.onPatronymicChange} className="field"></input>
                  </div>
                  <button onClick={this.onSubmit} id="btn"> submit </button>
              </div>
        )
    }
}