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
            ]
        }
        this.maxId = 5;
        
        console.log(Object.keys(this.state.data).length);
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
    //переключение increase
    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = {...old, increase:!old.increase};
        //     const newArr = [...data.slice(0,index),newItem,...data.slice(index + 1)]
        //     return {
        //         data:newArr
        //     }
        // })
        //с использованием метода map
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, increase:!item.increase}
                }
                return item;
            })
        }))
        
    }
    //переключение rise
    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {...item, rise:!item.rise}
                }
                return item;
            })
        }))
    }
    //учет количества сотрудников
  
    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item =>item.increase).length;
        return (
            <div className="app" >
                <AppInfo amountEmployees={employees}
                employeesIncrease={increased}/>

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise} />
                <EmployersAddForms onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;
