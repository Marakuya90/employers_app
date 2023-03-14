import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';



const EmployersList = ({data, onDelete, onSubmit}) => {
    
    const element = data.map(item => {

        const {id, ...itemProps} = item;
        return (
            <EmployersListItem 
            key = {id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onSubmit={() => onSubmit(...itemProps)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    );
}

export default EmployersList;

