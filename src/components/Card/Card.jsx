import { Link } from "react-router-dom";
import style from "./Card.module.css";


export default function Card({name, status, origin, gender, onClose, species, image, id}) {
   return (   
      <div className = {style.container}> 
         <button onClick= {() => onClose(id)} className={style.closeButton}>X</button>
         <Link to= {`/detail/${id}`}>
            <h2>{name}</h2></Link>
            <img className = {style.image} src={image} alt="{name}" /> 
            <h2>{status}</h2> 
            <h2>{species}</h2>
            <h2>{gender}</h2> 
            <h2>{origin}</h2>
        
      </div>
   );
}
