import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

const Detail = () => {
    const {detailId} = useParams();

    const [character, setCharacter] = useState({});
    useEffect (()=> {
            axios(`http://localhost:3001/rickandmorty/character/${detailId}`).then(({ data }) => {
               if (data.name) {
                  setCharacter(data);
               } else {
                  window.alert('No hay personajes con ese ID');
               }
            });
            return setCharacter({});
         }, [detailId]);
    
return (
    <div>
        {character.name ? (
            <>
            <h1>{character.name}</h1>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin?.name}</h2>
            <img src={character.image} alt={character.name}/>
            </>
        ) : (
            <h2>Loading...</h2>
        )}
        </div>
        );
};


export default Detail;