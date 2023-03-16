import './app-info.css';

const AppInfo = ({amountEmployees,employeesIncrease}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников компании N</h1>
            <h2>Общее число сотрудников: {amountEmployees}</h2>
            <h1>Премию получат: {employeesIncrease}</h1>
        </div>
    )
}

export default AppInfo;