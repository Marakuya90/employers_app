import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForms from '../employers-add-form/employers-add-form';

import './app.css';

function App() {
    return (
        <div className="app" >
            <AppInfo />

            <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
            </div>

            <EmployersList/>
            <EmployersAddForms/>
        </div>
    )
}

export default App;