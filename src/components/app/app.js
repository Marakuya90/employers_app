import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForms from '../employers-add-form/employers-add-form';

import './app.css';

const data = [
    {name:'Romashkin A', salary:'3000', increase:true},
    {name:'Petrov A', salary:'2000', increase:false},
    {name:'Ivanov I', salary:'1000', increase:false},
    {name:'Gosudarev D', salary:'2000', increase:false}
];

function App() {
    return (
        <div className="app" >
            <AppInfo />

            <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
            </div>

            <EmployersList data={data}/>
            <EmployersAddForms/>
        </div>
    )
}

export default App;
