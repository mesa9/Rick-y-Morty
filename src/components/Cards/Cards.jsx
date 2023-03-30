import Card from '../Card/Card';
import style from "./Cards.module.css";


export default function Cards({characters, onClose}) {
  
   return (  
   <div className={style.cardsContainer}>

      {characters && characters.map((element, index) => {
            return (
             <Card 
             key={index}
             id={element.id}
             name={element.name}
             species={element.species}
             gender={element.gender}
             image={element.image}
             onClose={onClose}
             ></Card>
            ); 
})}   
   </div>
   );
}
