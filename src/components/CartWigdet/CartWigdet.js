//Importo Estilos CSS y Imagen de Carrito
import './CartWigdet.css';
import carrito from './carrito.png';

//Funcion de Carrito
const CarritoUno = () => {
  return (
    <div>
        <img className="carrito1" src={carrito}/>
    </div>
  )
};


//Exporto
export default CarritoUno;
