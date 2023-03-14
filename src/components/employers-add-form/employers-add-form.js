import { Component } from 'react';
import './employers-add-form.css';

class EmployersAddForms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    render() {

        const{name, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input 
                        name='name'
                        value={name}
                        onChange = {this.onValueChange}
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input 
                        name='salary'
                        value={salary}
                        onChange = {this.onValueChange}
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForms;