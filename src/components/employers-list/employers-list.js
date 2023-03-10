import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';



const EmployersList = ({data}) => {

    const element = data.map(item => {
        return (
            <EmployersListItem {...item}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    );
}

export default EmployersList;

