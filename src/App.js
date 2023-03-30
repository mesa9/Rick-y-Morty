import style from './App.module.css';
import Nav from "./components/Nav/Nav.jsx";
import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';


function App () {
  const [characters, setCharacters] = useState([]);
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            let exist = characters.find((char) => char.id === data.id);
            if (exist) {
               alert("Personaje repetido");
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
            
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 };

 function onClose (id) {
  setCharacters((oldChars) => {
  return oldChars.filter((char) => char.id !== id)});
 };
  return (
   
    <div className={style.App}>
       <Nav onSearch={onSearch}/>
       <Routes>
         <Route
         path="/home" 
         element= {<Cards onClose={onClose} characters={characters} />}
         />
         <Route path='/about' element={<About />}/>
         <Route path='/detail/:detailId' element={<Detail />}/> 
       </Routes>
           
     </div>
     
  )
}

export default App
