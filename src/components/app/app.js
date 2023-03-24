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
                { name: 'Romashkin A', salary: '3000', increase: true, rise: true, id: 1 },
                { name: 'Petrov A', salary: '2000', increase: false, rise: false, id: 2 },
                { name: 'Ivanov I', salary: '1000', increase: false, rise: false, id: 3 },
                { name: 'Gosudarev D', salary: '2000', increase: false, rise: false, id: 4 }
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 5;
    }

    //удаление элементов из state(принцип иммутабельности)
    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    //добавление новых пользователей
    addItem = (name, salary) => {
        if (name.length > 3 & salary > 100) {
            const newItem = {
                name,
                salary,
                increase: false,
                rise: false,
                id: this.maxId++
            }
            this.setState(({ data }) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        }
    }
    //переключение prop
    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }
    //изменение зп
    changeSalary = (id, salary) => {
        this.setState = (({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: salary}
                }
                return item;
            })
        }))
    }

    // реализация поиска
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    //реализация фильтров
    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }
    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { data, term, filter } = this.state;
        const employees = data.length;
        const increased = data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app" >
                <AppInfo amountEmployees={employees}
                    employeesIncrease={increased} />

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.changeSalary} />
                <EmployersAddForms onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;
