// Importo estilos CSS
import './titulo.css';

//Funcion ItemListContainer
const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h2 className="titulo1">{greeting}</h2>
        </div>
    )
};

//Exporto
export default ItemListContainer;