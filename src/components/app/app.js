import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForms from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { name: 'Romashkin A', salary: '3000', increase: true, id: '1' },
                { name: 'Petrov A', salary: '2000', increase: false, id: '2' },
                { name: 'Ivanov I', salary: '1000', increase: false, id: '3' },
                { name: 'Gosudarev D', salary: '2000', increase: false, id: '4' }
            ]
        }
    }
//удаление элементов из state(принцип иммутабельности)
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }

        })
    }


    render() {
        const{data} = this.state
        return (
            <div className="app" >
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList
                    data={data}
                    onDelete={this.deleteItem}
                    onSumbit={this.addItem} />
                <EmployersAddForms />
            </div>
        )
    }
}


export default App;
